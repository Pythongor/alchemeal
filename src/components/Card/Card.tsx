import React, { useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { StateType } from "store/types";
import { processSelectedCard } from "store/actions";
import { Element, FoodType } from "logic/types";
import * as images from "./cardImages";
import styles from "./Card.module.scss";

type OwnProps = {
  title: Element | null;
  type: FoodType | null;
  isDecorative?: boolean;
  isNewResult?: boolean;
  willUnmount?: boolean;
  isDeadEnd?: boolean;
};

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type CardProps = StateProps & DispatchProps & OwnProps;

const imgs = images as { [key: string]: string };

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
  const [isFaded, setFaded] = useState<boolean>(!willUnmount);

  if (isFaded) {
    setTimeout(() => setFaded(false), 100);
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!title || !type) {
      return;
    }

    processSelectedCard([title, type]);
  };

  const image = title ? imgs[title.replace(" ", "").replace("-", "_")] : "";

  return (
    <div
      className={cn(
        styles.card,
        type ? styles[`card__${type}`] : styles.card__none,
        {
          [styles.card__selected]: [
            firstSelectedElement && firstSelectedElement[0],
            secondSelectedElement && secondSelectedElement[0],
          ].includes(title),
        },
        { [styles.card__decorative]: isDecorative },
        { [styles.card__faded]: isFaded || willUnmount },
        { [styles["card__new-result"]]: isNewResult },
        { [styles["card__dead-end"]]: isDeadEnd },
      )}
      onClick={onClick}
    >
      <div className={styles.card_title}>{title}</div>
      {!type && <div className={styles.nothingCreated}>🛇</div>}
      <div className={styles["card_image-wrapper"]}>
        <img className={styles.card_image} src={image} alt=""></img>
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
