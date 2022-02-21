import React, { useEffect, useState } from "react";
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
type FilterFuncType = () => (title: ElementType) => boolean;

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
  const [filterFunc, setFilterFunc] = useState<FilterFuncType>(
    () => (title: ElementType) => true
  );

  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (deadEndsStatus !== "exclude") {
      setFilterFunc(() => (title: ElementType) => true);
    } else if (isFirstRender) {
      setFilterFunc(
        () => (title: ElementType) => !isDeadEnd(title, openedElements)
      );
      setFirstRender(false);
    } else {
      setTimeout(
        () =>
          setFilterFunc(
            () => (title: ElementType) => !isDeadEnd(title, openedElements)
          ),
        350
      );
    }
  }, [deadEndsStatus, openedElements, isFirstRender]);

  const sortFunc = sortFuncs[sortBy];
  return (
    <div className={styles.container}>
      {[...openedElements]
        .filter(filterFunc)
        .sort(sortFunc)
        .map((title) => {
          const isNewResult = newResult
            ? typeof newResult === "string"
              ? newResult === title
              : newResult.includes(title)
            : false;

          const willUnmount = newOpenedElements
            ? !newOpenedElements?.includes(title)
            : false;

          const isDead =
            isDeadEnd(title, openedElements) && deadEndsStatus === "exclude";

          return (
            <Card
              title={title}
              type={allElements[title]}
              key={title}
              isNewResult={isNewResult}
              isDeadEnd={
                deadEndsStatus === "show" && isDeadEnd(title, openedElements)
              }
              willUnmount={willUnmount || isDead}
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
