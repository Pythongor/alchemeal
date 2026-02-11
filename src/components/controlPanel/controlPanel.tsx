import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { elementsLength } from "logic/foodTypes";
import {
  setSortType,
  setDeadEndsType,
  resetProgress,
  setModal,
} from "store/actions";
import { StateType, SortType } from "store/types";
import styles from "./controlPanel.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type ControlPanelProps = StateProps & DispatchProps;

const sortsTextes: {
  [key in SortType]: string;
} = {
  alphabet: "alphabet",
  type: "type",
  time: "opening order",
};

const animate = () => {
  const icon: HTMLDivElement | null = document.querySelector(
    `.${styles.icon__reset}`,
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

const ControlPanel: React.FC<ControlPanelProps> = ({
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
      <button onClick={() => setDeadEndsType()} className={styles.button}>
        <span className={styles.button_text}>
          {deadEndsStatus[0].toUpperCase() + deadEndsStatus.slice(1)} dead ends
        </span>
        <div className={cn(styles.icon, styles[`icon__${deadEndsStatus}`])} />
      </button>
      <button onClick={() => setSortType()} className={styles.button}>
        <span className={styles.button_text}>Sort by: {sortText}</span>
        <div className={cn(styles.icon, styles[`icon__sort_${sortBy}`])} />
      </button>
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
        <div className={cn(styles.icon, styles.icon__reset)} />
      </button>
      <div
        className={cn(styles.scores, {
          [styles.scores__completed]: openedElements.length === elementsLength,
        })}
      >
        {openedElements.length}/{elementsLength}
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

export default connect(MSTP, MDTP)(ControlPanel);
