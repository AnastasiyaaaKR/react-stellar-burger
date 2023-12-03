import React from "react";
import doneIcon from '../../images/done.png'
import Modal from "../Modal/Modal";
import styles from "./OrderDetails.module.css"

const OrderDetails = ({visible, closeModal}) => {
  if(visible) {
    return (
      <Modal visible={visible} closeModal={closeModal}>
        <div className={styles.OrderDetails__wrapper}>
          <p className="text text_type_digits-large mb-8">034536</p>
          <p className="text text_type_main-medium mb-15">
            идентификатор заказа
          </p>
          <img src={doneIcon} alt='Галочка готово'/>
          <p className="text text_type_main-small mt-15 mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-small text_color_inactive mb-30">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </Modal>
    )
  } return null
}

export default OrderDetails;