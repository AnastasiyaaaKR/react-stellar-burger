import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modals");

const Modal = ({ closeModal, children, title }) => {
  function closeByEsc(evt) {
    if (evt.key === "Escape") {
      closeModal();
    }
  }

  document.addEventListener("keydown", closeByEsc);

  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal}>
      <div className={`${styles.modal__window} pt-10 pb-15`}>
        <h2
          className={`${styles.modal__header} text text_type_main-large pl-40 pr-40`}
        >
          <p className="text text_type_main-large ml-10">{title}</p>
          <button
            className={`${styles.modal__button} mr-10`}
            onClick={closeModal}
          >
            <CloseIcon />
          </button>
        </h2>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
