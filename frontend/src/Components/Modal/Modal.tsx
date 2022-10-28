import React from "react";

import "./Modal.scss";

interface ModalProps {
  children?: React.ReactNode;
  modal?: false;
  open?: () => void;
  close?: () => void;
}

const Modal = ({ children, close }: ModalProps) => {
  return (
    <>
      <div className="modalBackground" onClick={close} />
      <div className="modal__info">{children}</div>
    </>
  );
};

export default Modal;
