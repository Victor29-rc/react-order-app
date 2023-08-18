import React from "react-dom";
import classes from "./modal.module.css";

const ModalBody = ({ children, modalStyles }) => {
  const MODAL_STYLES = modalStyles || {};

  return (
    <div className={classes.modal_container} style={MODAL_STYLES}>
      <div className={classes.modal_header + " modal-header"}></div>
      <div className={classes.modal_body + " modal-body"}>{children}</div>
      <div className={classes.modal_footer + " modal-footer"}></div>
    </div>
  );
};

const ModalBackDrop = () => {
  return <div className={classes.backdrop_zone_active + " back-drop"}></div>;
};

const Modal = ({ children, modalStyles }) => {
  return (
    <>
      {React.createPortal(
        <ModalBody children={children} modalStyles={modalStyles} />,
        document.getElementById("modal")
      )}
      {React.createPortal(
        <ModalBackDrop />,
        document.getElementById("modal-backdrop")
      )}
    </>
  );
};

export default Modal;
