import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { StateType } from "store/types";
import { setModal } from "store/actions";
import styles from "./modal.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type ModalProps = StateProps & DispatchProps;

const Modal: React.FC<ModalProps> = ({ modal, setModal }) => {
  return (
    <div className={cn(styles.wrapper, { [styles.wrapper__closed]: !modal })}>
      <div className={styles.container}>
        <div className={styles.title}>{modal?.text}</div>
        {modal?.body && (
          <div className={styles.content}>
            <modal.body />
          </div>
        )}
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setModal(null);
              modal?.acceptFunc && modal.acceptFunc();
            }}
            className={cn(styles.accept, styles.button)}
          >
            OK
          </button>
          {modal?.isDialog && (
            <button
              onClick={() => setModal(null)}
              className={cn(styles.decline, styles.button)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const MDTP = { setModal };

const MSTP = ({ modal }: StateType) => ({
  modal,
});

export default connect(MSTP, MDTP)(Modal);
