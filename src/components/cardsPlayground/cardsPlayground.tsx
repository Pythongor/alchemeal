import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { allElements, ElementType } from "recipes";
import { StateType, SortType } from "store/types";
import styles from "./cardsPlayground.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardsPlaygroundProps = StateProps & DispatchProps;

type SortFuncsType = {
  [key in SortType]: (a: ElementType, b: ElementType) => number;
};

const sortFuncs: SortFuncsType = {
  time: (a, b) => -1,
  alphabet: (a, b) => a[0].localeCompare(b[0]),
  type: (a, b) =>
    allElements[a].localeCompare(allElements[b]) || a[0].localeCompare(b[0]),
};

const CardsPlayground: React.FC<CardsPlaygroundProps> = ({
  openedElements,
  newResult,
  sortBy,
}) => {
  const sortFunc = sortFuncs[sortBy];
  return (
    <div className={styles.container}>
      {[...openedElements].sort(sortFunc).map((title) => {
        const isNewResult = newResult
          ? typeof newResult === "string"
            ? newResult === title
            : newResult.includes(title)
          : false;
        return (
          <Card
            title={title}
            type={allElements[title]}
            key={title}
            isNewResult={isNewResult}
          />
        );
      })}
    </div>
  );
};

const MSTP = ({ openedElements, newResult, sortBy }: StateType) => ({
  openedElements,
  newResult,
  sortBy,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CardsPlayground);
