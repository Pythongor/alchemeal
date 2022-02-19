import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { elementsList } from "recipes";
import { setSortType } from "store/actions";
import { StateType, SortType } from "store/types";
import styles from "./header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type HeaderProps = StateProps & DispatchProps;

type SortsAttributesType = {
  [key in SortType]: { sortText: string; nextSortType: SortType };
};

const sortsAttributes: SortsAttributesType = {
  alphabet: { sortText: "alphabet", nextSortType: "type" },
  type: { sortText: "type", nextSortType: "time" },
  time: { sortText: "opening order", nextSortType: "alphabet" },
};

const Header: React.FC<HeaderProps> = ({
  openedElements,
  sortBy,
  setSortType,
}) => {
  const { sortText, nextSortType } = sortsAttributes[sortBy];
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AlcheMeal</div>
      <div className={styles["right-content"]}>
        <button className={styles.sort}>Remove dead ends</button>
        <button
          onClick={() => setSortType(nextSortType)}
          className={styles.sort}
        >
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
        <div className={styles.tips}></div>
      </div>
    </div>
  );
};

const MSTP = ({ openedElements, sortBy }: StateType) => ({
  openedElements,
  sortBy,
});

const MDTP = { setSortType };

export default connect(MSTP, MDTP)(Header);
