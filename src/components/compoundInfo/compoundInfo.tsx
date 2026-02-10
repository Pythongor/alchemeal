import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Card } from "..";
import ResultInfo from "./resultInfo";
import { StateType } from "store/types";
import styles from "./compoundInfo.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CompoundInfoProps = StateProps & DispatchProps;

const CompoundInfo: React.FC<CompoundInfoProps> = ({
  firstSelectedElement,
  secondSelectedElement,
  compoundStatus,
}) => {
  const firstWillUnmount = ["-1", "1=2 -2"].includes(compoundStatus);
  const secondWillUnmount = ["-1", "-2", "1=2 -2", "1", "-", "!"].includes(
    compoundStatus,
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
      <div className={cn(styles.sign, styles.sign__plus)}>+</div>
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
        <ResultInfo />
      </div>
    </div>
  );
};

const MSTP = ({
  firstSelectedElement,
  secondSelectedElement,
  compoundStatus,
}: StateType) => ({
  firstSelectedElement,
  secondSelectedElement,
  compoundStatus,
});

const MDTP = {};

export default connect(MSTP, MDTP)(CompoundInfo);
