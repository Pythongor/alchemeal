import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateCards,
  updateCompoundInfo,
  updateOnLoad,
  resetSelections,
  setModal,
  resetProgress,
} from "store/actions";
import { elementsList } from "recipes";
import { StateType } from "store/types";
import styles from "./app.module.scss";
import { CardsPlayground, Header, CompoundInfo, Modal } from "..";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type AppProps = StateProps & DispatchProps;

const App: React.FC<AppProps> = ({
  newOpenedElements,
  compoundStatus,
  openedElements,
  updateCards,
  updateCompoundInfo,
  resetSelections,
  updateOnLoad,
  setModal,
  resetProgress,
}) => {
  useEffect(() => {
    if (newOpenedElements) {
      setTimeout(() => updateCards(), 350);
    }
  }, [newOpenedElements, updateCards]);

  useEffect(() => {
    if (openedElements.length === elementsList.length) {
      setModal({
        isDialog: true,
        acceptFunc: () => {
          resetProgress();
        },
        text:
          "Congratulation! You are the greatest Chef-Alchemist in the world!" +
          " Do you want to play again?",
      });
    }
  }, [openedElements, setModal, resetProgress]);

  useEffect(() => {
    updateOnLoad(localStorage);
  }, [updateOnLoad]);

  useEffect(() => {
    setTimeout(() => updateCompoundInfo(), 350);
  }, [compoundStatus, updateCompoundInfo]);

  return (
    <div
      className={styles.app}
      onClick={(ev) => {
        const element = ev.target as HTMLElement;
        const isElementCard = [...element.classList].some(
          (className) =>
            className.includes("card_card_") ||
            className.includes("compoundInfo_multiple-result")
        );
        if (!isElementCard && element.tagName !== "BUTTON") resetSelections();
      }}
    >
      <Modal />
      <Header />
      <div className={styles.container}>
        <CardsPlayground />
        <CompoundInfo />
      </div>
    </div>
  );
};

const MSTP = ({
  newOpenedElements,
  compoundStatus,
  openedElements,
}: StateType) => ({
  newOpenedElements,
  compoundStatus,
  openedElements,
});

const MDTP = {
  updateCards,
  updateCompoundInfo,
  resetSelections,
  updateOnLoad,
  setModal,
  resetProgress,
};

export default connect(MSTP, MDTP)(App);
