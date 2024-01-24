import React from "react";
import doneIcon from "../../images/done.png";
import styles from "./OrderDetailsContent.module.css";

interface IorderNumberProps {
  orderNumber: number
}

const OrderDetailsContent = ({orderNumber}: IorderNumberProps) => {
  return (
    <div className={styles.OrderDetailsContent__wrapper}>
      <p className="text text_type_digits-large mb-8">{orderNumber}</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={doneIcon} alt="Галочка готово" />
      <p className="text text_type_main-small mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetailsContent;
