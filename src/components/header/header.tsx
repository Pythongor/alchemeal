import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { elementsList } from "recipes";
import { setSortType, setDeadEndsType, resetSelections } from "store/actions";
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

const Header: React.FC<HeaderProps> = ({
  openedElements,
  sortBy,
  deadEndsStatus,
  setSortType,
  setDeadEndsType,
  resetSelections,
}) => {
  const sortText = sortsTextes[sortBy];
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AlcheMeal</div>
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
          className={cn(styles.reset, styles.button)}
          onClick={() => resetSelections()}
        >
          <div className={styles.reset_icon}></div>
        </button>
      </div>
    </div>
  );
};

const MSTP = ({ openedElements, sortBy, deadEndsStatus }: StateType) => ({
  openedElements,
  sortBy,
  deadEndsStatus,
});

const MDTP = { setSortType, setDeadEndsType, resetSelections };

export default connect(MSTP, MDTP)(Header);
