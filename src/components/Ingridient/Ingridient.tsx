import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingridient.module.css";
import { useDrag } from "react-dnd";
import {IIngredient} from "../../../types";

interface IIngridientProps {
  item: IIngredient
  showIngridientsModal: () => void,
}

const Ingridient = ({item, showIngridientsModal }: IIngridientProps) => {
  const[, dragRef]= useDrag({
    type: "ingridient", 
    item
  })
  return (
    <div
      onClick={showIngridientsModal}
      className={`${styles.ingridient__wpapper} mt-6 ml-4 mr-6`}
      ref={dragRef}
    >
      <img src={item.image} alt={item.name} />
      <Counter count={item.__v} size="default" />
      <div className={styles.ingridient__cost}>
        <p
          className={`${styles.ingridient__costText}text text_type_digits-default mt-1 mb-1`}
        >
          {item.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.ingridient__text} text text_type_main-small`}>
        {item.name}
      </p>
    </div>
  );
};

export default Ingridient;
