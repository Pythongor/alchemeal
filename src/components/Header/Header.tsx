import React from "react";
import { connect } from "react-redux";
import { setModal } from "store/actions";
import { Credits, ControlPanel } from "..";
import styles from "./Header.module.scss";

type DispatchProps = typeof MDTP;

const Header: React.FC<DispatchProps> = ({ setModal }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => {
          setModal({
            text: "Credits",
            body: Credits,
          });
        }}
      >
        AlcheMeal
      </div>
      <ControlPanel />
    </div>
  );
};

const MDTP = { setModal };

export default connect(null, MDTP)(Header);
