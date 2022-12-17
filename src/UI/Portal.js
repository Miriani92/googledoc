import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Portal.module.css";

const portalElemnt = document.getElementById("portal");

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const { top, left } = props.modalStyle;
  const styles = {
    position: "absolute",
    top: top + 25,
    left: left,
    zIndex: 100,
    boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div style={styles} className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElemnt)}
      {createPortal(
        <ModalOverlay modalStyle={props.modalStyle}>
          {props.children}
        </ModalOverlay>,
        portalElemnt
      )}
    </Fragment>
  );
};
export default Modal;
