import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { recipesByElement } from "logic/recipes";
import { foodTypesMap } from "logic/foodTypes";
import { Element } from "logic/types";
import { StateType, SortType } from "store/types";
import styles from "./cardsPlayground.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardsPlaygroundProps = StateProps & DispatchProps;

type SortFuncsType = {
  [key in SortType]: (a: Element, b: Element) => number;
};
type FilterFuncType = () => (title: Element) => boolean;

const sortFuncs: SortFuncsType = {
  time: () => 0,
  alphabet: (a, b) => a[0].localeCompare(b[0]),
  type: (a, b) =>
    foodTypesMap[a].localeCompare(foodTypesMap[b]) || a[0].localeCompare(b[0]),
};

const isDeadEnd = (title: Element, openedElements: Element[]) => {
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
    () => (title: Element) => true,
  );

  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (deadEndsStatus !== "hide") {
      setFilterFunc(() => (title: Element) => true);
    } else if (isFirstRender) {
      setFilterFunc(
        () => (title: Element) => !isDeadEnd(title, openedElements),
      );
      setFirstRender(false);
    } else {
      setTimeout(
        () =>
          setFilterFunc(
            () => (title: Element) => !isDeadEnd(title, openedElements),
          ),
        350,
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
            isDeadEnd(title, openedElements) && deadEndsStatus === "hide";

          return (
            <Card
              title={title}
              type={foodTypesMap[title]}
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
