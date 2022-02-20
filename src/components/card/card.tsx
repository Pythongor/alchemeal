import React, { useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { StateType } from "store/types";
import { processSelectedCard } from "store/actions";
import { ElementType, FoodType } from "recipes";
import Earth from "assets/images/icons/earth.png";
import styles from "./card.module.scss";

type OwnProps = {
  title: ElementType;
  type: FoodType;
  isDecorative?: boolean;
  isNewResult?: boolean;
  willUnmount?: boolean;
  isDeadEnd?: boolean;
};

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardProps = StateProps & DispatchProps & OwnProps;

const Card: React.FC<CardProps> = ({
  title,
  type,
  firstSelectedElement,
  secondSelectedElement,
  isDecorative = false,
  processSelectedCard,
  isNewResult,
  willUnmount,
  isDeadEnd,
}) => {
  const [isFaded, setFaded] = useState<boolean>(true);
  if (isFaded) {
    setTimeout(() => setFaded(false), 100);
  }
  return (
    <div
      className={cn(
        styles.card,
        styles[`card__${type}`],
        {
          [styles.card__selected]: [
            firstSelectedElement && firstSelectedElement[0],
            secondSelectedElement && secondSelectedElement[0],
          ].includes(title),
        },
        { [styles.card__decorative]: isDecorative },
        { [styles.card__faded]: isFaded || willUnmount },
        { [styles["card__new-result"]]: isNewResult },
        { [styles["card__dead-end"]]: isDeadEnd }
      )}
      onClick={() => processSelectedCard([title, type])}
    >
      <div className={styles.card_title}>{title}</div>
      <div className={styles["card_image-wrapper"]}>
        <img className={styles.card_image} src={Earth} alt=""></img>
      </div>
    </div>
  );
};

const MSTP = ({ firstSelectedElement, secondSelectedElement }: StateType) => ({
  firstSelectedElement,
  secondSelectedElement,
});

const MDTP = { processSelectedCard };

export default connect(MSTP, MDTP)(Card);
