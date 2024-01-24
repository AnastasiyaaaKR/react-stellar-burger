import React, { useRef } from "react";
import styles from "./ModalOverlay.module.css";

interface IModalOverlayProps {
  children: React.ReactNode,
  closeModal: () => void,
}

const ModalOverlay = ({ children, closeModal }: IModalOverlayProps) => {
  const overlayRef = useRef<HTMLElement>(null);

  const handleClick: React.MouseEventHandler<HTMLElement> = (evt): void => {
    if (evt.target === overlayRef.current) {
      closeModal();
    }
  };
  return (
    <section
      ref={overlayRef}
      className={styles.modal__wrapper}
      onClick={handleClick}
    >
      {children}
    </section>
  );
};

export default ModalOverlay;
