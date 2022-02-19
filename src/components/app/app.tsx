import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateCards,
  updateCompoundInfo,
  resetSelections,
} from "store/actions";
import { StateType } from "store/types";
import styles from "./app.module.scss";
import { CardsPlayground, Header, CompoundInfo } from "..";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type AppProps = StateProps & DispatchProps;

const App: React.FC<AppProps> = ({
  newOpenedElements,
  compoundStatus,
  updateCards,
  updateCompoundInfo,
  resetSelections,
}) => {
  useEffect(() => {
    if (newOpenedElements) {
      setTimeout(() => updateCards(), 350);
    }
  }, [newOpenedElements, updateCards]);

  useEffect(() => {
    setTimeout(() => updateCompoundInfo(), 350);
  }, [compoundStatus, updateCompoundInfo]);

  return (
    <div
      className={styles.app}
      onClick={(ev) => {
        const element = ev.target as HTMLElement;
        const isElementCard = [...element.classList].some((className) =>
          className.includes("card_card_")
        );
        if (!isElementCard) resetSelections();
      }}
    >
      <Header />
      <div className={styles.container}>
        <CardsPlayground />
        <CompoundInfo />
      </div>
    </div>
  );
};

const MSTP = ({ newOpenedElements, compoundStatus }: StateType) => ({
  newOpenedElements,
  compoundStatus,
});

const MDTP = { updateCards, updateCompoundInfo, resetSelections };

export default connect(MSTP, MDTP)(App);
