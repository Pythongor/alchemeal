import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { ElementEntriesType, FoodType } from "recipes";
import MultipleResultCard from "./multipleResultCard";
import { StateType } from "store/types";
import styles from "./compoundInfo.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CompoundInfoProps = StateProps & DispatchProps;

const CompoundInfo: React.FC<CompoundInfoProps> = ({
  firstSelectedElement,
  secondSelectedElement,
  result,
  newResult,
  compoundStatus,
}) => {
  const resultInfo = result
    ? typeof result[0] === "string"
      ? (result as ElementEntriesType)
      : (result as ElementEntriesType[])
    : null;
  const firstWillUnmount = ["-1", "1=2 -2"].includes(compoundStatus);
  const secondWillUnmount = ["-1", "-2", "1=2 -2", "1", "-", "!"].includes(
    compoundStatus
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles["card-holder"]}>
        {firstSelectedElement && (
          <Card
            isDecorative={true}
            title={firstSelectedElement[0]}
            type={firstSelectedElement[1]}
            willUnmount={firstWillUnmount}
          />
        )}
      </div>
      <div className={styles.sign}>+</div>
      <div className={styles["card-holder"]}>
        {secondSelectedElement && (
          <Card
            isDecorative={true}
            title={secondSelectedElement[0]}
            type={secondSelectedElement[1]}
            willUnmount={secondWillUnmount}
          />
        )}
      </div>
      <div className={styles.sign}>=</div>
      <div className={styles["card-holder"]}>
        {resultInfo && typeof resultInfo[0] === "string" ? (
          <Card
            title={resultInfo[0]}
            type={resultInfo[1] as FoodType}
            willUnmount={secondWillUnmount}
            isNewResult={!!newResult}
          />
        ) : (
          resultInfo && (
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
          )
        )}
      </div>
    </div>
  );
};

const MSTP = ({
  firstSelectedElement,
  secondSelectedElement,
  result,
  newResult,
  compoundStatus,
}: StateType) => ({
  firstSelectedElement,
  secondSelectedElement,
  result,
  newResult,
  compoundStatus,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CompoundInfo);
