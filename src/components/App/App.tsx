import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateCards,
  updateCompoundSection,
  resetSelections,
  setModal,
  resetProgress,
} from "store/actions";
import { elementsLength } from "logic/foodTypes";
import { StateType } from "store/types";
import styles from "./App.module.scss";
import { CardsPlayground, Header, CompoundInfo, Modal } from "..";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type AppProps = StateProps & DispatchProps;

const App: React.FC<AppProps> = ({
  newOpenedElements,
  compoundStatus,
  openedElements,
  updateCards,
  updateCompoundSection,
  resetSelections,
  setModal,
  resetProgress,
}) => {
  useEffect(() => {
    if (newOpenedElements) {
      setTimeout(() => updateCards(), 350);
    }
  }, [newOpenedElements, updateCards]);

  useEffect(() => {
    if (openedElements.length === elementsLength) {
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
    document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    setTimeout(() => updateCompoundSection(), 350);
  }, [compoundStatus, updateCompoundSection]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    if (element.tagName !== "BUTTON") resetSelections();
  };

  return (
    <div className={styles.app} onClick={onClick}>
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
  updateCompoundSection,
  resetSelections,
  setModal,
  resetProgress,
};

export default connect(MSTP, MDTP)(App);
