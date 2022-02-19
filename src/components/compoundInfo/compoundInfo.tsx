import React from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { ElementEntriesType } from "recipes";
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
}) => {
  const resultInfo = result
    ? typeof result[0] === "string"
      ? (result as ElementEntriesType)
      : result[0]
    : null;
  return (
    <div className={styles.wrapper}>
      <div className={styles["card-holder"]}>
        {firstSelectedElement && (
          <Card
            isDecorative={true}
            title={firstSelectedElement[0]}
            type={firstSelectedElement[1]}
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
          />
        )}
      </div>
      <div className={styles.sign}>=</div>
      <div className={styles["card-holder"]}>
        {resultInfo && (
          <Card
            isDecorative={true}
            title={resultInfo[0]}
            type={resultInfo[1]}
            isNewResult={!!newResult}
          />
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
}: StateType) => ({
  firstSelectedElement,
  secondSelectedElement,
  result,
  newResult,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CompoundInfo);
