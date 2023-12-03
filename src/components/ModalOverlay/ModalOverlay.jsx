import React from "react";
import styles from './ModalOverlay.module.css'

const ModalOverlay = ({children}) => {

  return (
    <section className={styles.modal__wrapper}>
      { children }
    </section>
  )
}

export default ModalOverlay