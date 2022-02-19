import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { allElements, ElementEntriesType } from "recipes";
import { StateType } from "store/types";
import styles from "./cardsPlayground.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardsPlaygroundProps = StateProps & DispatchProps;

const CardsPlayground: React.FC<CardsPlaygroundProps> = ({
  openedElements,
  newResult,
}) => {
  const entries = Object.entries(allElements) as ElementEntriesType[];
  return (
    <div className={styles.container}>
      {entries
        .filter(([title]) => openedElements.includes(title))
        // .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([title, type]) => {
          const isNewResult = newResult
            ? typeof newResult === "string"
              ? newResult === title
              : newResult.includes(title)
            : false;
          return (
            <Card
              title={title}
              type={type}
              key={title}
              isNewResult={isNewResult}
            />
          );
        })}
    </div>
  );
};

const MSTP = ({ openedElements, newResult }: StateType) => ({
  openedElements,
  newResult,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CardsPlayground);
