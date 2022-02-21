import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { allElements, recipesByElement, ElementType } from "recipes";
import { StateType, SortType } from "store/types";
import styles from "./cardsPlayground.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardsPlaygroundProps = StateProps & DispatchProps;

type SortFuncsType = {
  [key in SortType]: (a: ElementType, b: ElementType) => number;
};

const sortFuncs: SortFuncsType = {
  time: () => 0,
  alphabet: (a, b) => a[0].localeCompare(b[0]),
  type: (a, b) =>
    allElements[a].localeCompare(allElements[b]) || a[0].localeCompare(b[0]),
};

const isDeadEnd = (title: ElementType, openedElements: ElementType[]) => {
  const recipes = recipesByElement[title];
  if (recipes) {
    const availableResults = Object.values(recipes).flat();
    if (availableResults.some((element) => !openedElements.includes(element))) {
      return false;
    } else return true;
  } else return true;
};

const CardsPlayground: React.FC<CardsPlaygroundProps> = ({
  openedElements,
  newResult,
  sortBy,
  deadEndsStatus,
  newOpenedElements,
}) => {
  const sortFunc = sortFuncs[sortBy];
  const filterFunc =
    deadEndsStatus === "exclude"
      ? (title: ElementType) => !isDeadEnd(title, openedElements)
      : () => true;
  return (
    <div className={styles.container}>
      {[...openedElements]
        .sort(sortFunc)
        .filter(filterFunc)
        .map((title) => {
          const isNewResult = newResult
            ? typeof newResult === "string"
              ? newResult === title
              : newResult.includes(title)
            : false;
          const willUnmount = newOpenedElements
            ? !newOpenedElements?.includes(title)
            : false;
          return (
            <Card
              title={title}
              type={allElements[title]}
              key={title}
              isNewResult={isNewResult}
              isDeadEnd={
                deadEndsStatus === "show" && isDeadEnd(title, openedElements)
              }
              willUnmount={willUnmount}
            />
          );
        })}
    </div>
  );
};

const MSTP = ({
  openedElements,
  newResult,
  sortBy,
  deadEndsStatus,
  newOpenedElements,
}: StateType) => ({
  openedElements,
  newResult,
  sortBy,
  deadEndsStatus,
  newOpenedElements,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CardsPlayground);
