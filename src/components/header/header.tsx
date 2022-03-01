import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { elementsList } from "recipes";
import {
  setSortType,
  setDeadEndsType,
  resetProgress,
  setModal,
} from "store/actions";
import { Congrats } from "./credits";
import { StateType, SortType } from "store/types";
import styles from "./header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type HeaderProps = StateProps & DispatchProps;

const sortsTextes: {
  [key in SortType]: string;
} = {
  alphabet: "alphabet",
  type: "type",
  time: "opening order",
};

const animate = () => {
  const icon: HTMLDivElement | null = document.querySelector(
    `.${styles.reset_icon}`
  );
  if (icon) {
    const frame = () => {
      if (deg < 360) {
        deg += 4;
        icon.style.transform = `rotate(${deg}deg)`;
      } else {
        icon.style.transform = "none";
        clearInterval(id);
      }
    };
    let id = setInterval(frame, 1);
    let deg = 0;
  }
};

const Header: React.FC<HeaderProps> = ({
  openedElements,
  sortBy,
  deadEndsStatus,
  setSortType,
  setDeadEndsType,
  resetProgress,
  newOpenedElements,
  setModal,
}) => {
  const sortText = sortsTextes[sortBy];
  return (
    <div className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => {
          setModal({
            text: "Credits",
            body: Congrats,
          });
        }}
      >
        AlcheMeal
      </div>
      <div className={styles["right-content"]}>
        <button onClick={() => setDeadEndsType()} className={styles.button}>
          {deadEndsStatus[0].toUpperCase() + deadEndsStatus.slice(1)} dead ends
        </button>
        <button onClick={() => setSortType()} className={styles.button}>
          Sort by: {sortText}
        </button>
        <div
          className={cn(styles.scores, {
            [styles.scores__completed]:
              openedElements.length === elementsList.length,
          })}
        >
          {openedElements.length}/{elementsList.length}
        </div>
        <button
          className={styles.reset}
          onClick={() => {
            if (!newOpenedElements) {
              setModal({
                text: "Reset all your progress?",
                isDialog: true,
                acceptFunc: () => {
                  animate();
                  resetProgress();
                },
              });
            }
          }}
        >
          <div className={styles.reset_icon}></div>
        </button>
      </div>
    </div>
  );
};

const MSTP = ({
  openedElements,
  sortBy,
  deadEndsStatus,
  newOpenedElements,
}: StateType) => ({
  openedElements,
  sortBy,
  deadEndsStatus,
  newOpenedElements,
});

const MDTP = { setSortType, setDeadEndsType, resetProgress, setModal };

export default connect(MSTP, MDTP)(Header);
