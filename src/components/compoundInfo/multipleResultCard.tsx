import React, { useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { StateType } from "store/types";
import { processSelectedCard } from "store/actions";
import { Element, FoodType } from "logic/types";
import styles from "./compoundInfo.module.scss";

type OwnProps = {
  title: Element;
  type: FoodType;
  willUnmount?: boolean;
  isNewResult?: boolean;
};

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type MultipleResultCardProps = StateProps & DispatchProps & OwnProps;

const MultipleResultCard: React.FC<MultipleResultCardProps> = ({
  title,
  type,
  firstSelectedElement,
  secondSelectedElement,
  processSelectedCard,
  willUnmount,
  isNewResult,
}) => {
  const [isFaded, setFaded] = useState<boolean>(!willUnmount);

  if (isFaded) {
    setTimeout(() => setFaded(false), 100);
  }

  return (
    <div
      className={cn(
        styles.card,
        styles.card__decorative,
        styles["multiple-result_card"],
        { [styles["card__new-result"]]: isNewResult },
        styles[`card__${type}`],
        {
          [styles.card__selected]: [
            firstSelectedElement && firstSelectedElement[0],
            secondSelectedElement && secondSelectedElement[0],
          ].includes(title),
        },
        { [styles.card__faded]: isFaded || willUnmount },
      )}
      onClick={() => processSelectedCard([title, type])}
    >
      <div className={styles.card_title}>{title}</div>
    </div>
  );
};

const MSTP = ({ firstSelectedElement, secondSelectedElement }: StateType) => ({
  firstSelectedElement,
  secondSelectedElement,
});

const MDTP = { processSelectedCard };

export default connect(MSTP, MDTP)(MultipleResultCard);
