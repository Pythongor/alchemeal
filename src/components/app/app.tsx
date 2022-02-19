import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateCards } from "store/actions";
import { StateType } from "store/types";
import styles from "./app.module.scss";
import { CardsPlayground, Header, CompoundInfo } from "..";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type AppProps = StateProps & DispatchProps;

const App: React.FC<AppProps> = ({ newOpenedElements, updateCards }) => {
  useEffect(() => {
    if (newOpenedElements) {
      console.log("in App:", newOpenedElements);
      setTimeout(() => updateCards(), 350);
    }
  }, [newOpenedElements, updateCards]);
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <CardsPlayground />
        <CompoundInfo />
      </div>
    </div>
  );
};

const MSTP = ({ newOpenedElements }: StateType) => ({ newOpenedElements });

const MDTP = { updateCards };

export default connect(MSTP, MDTP)(App);
