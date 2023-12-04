import React, {useRef} from "react";
import styles from './ModalOverlay.module.css'

const ModalOverlay = ({children, closeModal}) => {

  const overlayRef = useRef()

  const handleClick = (evt)=>{
    if (evt.target === overlayRef.current) {
      closeModal(styles.modal__wrapper)
    }
    
  }
  return (
    <section ref={overlayRef} className={styles.modal__wrapper} onClick={handleClick}>
      { children }
    </section>
  )
}

export default ModalOverlay