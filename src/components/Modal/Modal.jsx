import React from "react";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Modal = ({closeModal, children, title}) => {
  return (
    <ModalOverlay>
      <div className={`${styles.modal__window} pt-10 pb-15`}>
        <h2 className={`${styles.modal__header} text text_type_main-large pl-40 pr-40`}>
          <p className="text text_type_main-large ml-10">{title}</p>
          <button className={`${styles.modal__button} mr-10`} onClick={closeModal}>
            <CloseIcon/>
          </button>
        </h2>
        {children}
      </div>
    </ModalOverlay>
  )
}

export default Modal;