import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { elementsList } from "recipes";
import { StateType } from "store/types";
import styles from "./header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type HeaderProps = StateProps & DispatchProps;

const Header: React.FC<HeaderProps> = ({ openedElements }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AlcheMeal</div>
      <div className={styles["right-content"]}>
        <button className={styles.sort}>Remove dead ends</button>
        <button className={styles.sort}>Sort by: alphabet</button>
        <div
          className={cn(styles.scores, {
            [styles.scores__completed]:
              openedElements.length === elementsList.length,
          })}
        >
          {openedElements.length}/{elementsList.length}
        </div>
        <div className={styles.tips}></div>
      </div>
    </div>
  );
};

const MSTP = ({ openedElements }: StateType) => ({
  openedElements,
});

const MDTP = {};

export default connect(MSTP, MDTP)(Header);
