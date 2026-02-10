import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { ElementEntriesType, FoodType } from "recipes";
import MultipleResultCard from "./multipleResultCard";
import { StateType } from "store/types";
import styles from "./compoundInfo.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type ResultInfoProps = StateProps & DispatchProps;

const ResultInfo: React.FC<ResultInfoProps> = ({
  result,
  newResult,
  compoundStatus,
  secondSelectedElement,
}) => {
  const results = result
    ? typeof result[0] === "string"
      ? (result as ElementEntriesType)
      : (result as ElementEntriesType[])
    : null;

  const secondWillUnmount = ["-1", "-2", "1=2 -2", "1", "-", "!"].includes(
    compoundStatus,
  );

  if (!results) {
    if (secondSelectedElement) {
      return (
        <Card
          title={null}
          type={null}
          willUnmount={secondWillUnmount}
          isNewResult={!!newResult}
        />
      );
    }

    return null;
  }

  if (typeof results[0] === "string") {
    return (
      <Card
        title={results[0]}
        type={results[1] as FoodType}
        willUnmount={secondWillUnmount}
        isNewResult={!!newResult}
      />
    );
  }

  return (
    <div className={styles["multiple-result"]}>
      {(result as ElementEntriesType[]).map(([title, type]) => (
        <MultipleResultCard
          title={title}
          type={type}
          willUnmount={secondWillUnmount}
          key={title}
          isNewResult={!!newResult}
        />
      ))}
    </div>
  );
};

const MSTP = ({
  result,
  newResult,
  compoundStatus,
  secondSelectedElement,
}: StateType) => ({
  result,
  newResult,
  compoundStatus,
  secondSelectedElement,
});

const MDTP = {};

export default connect(MSTP, MDTP)(ResultInfo);
