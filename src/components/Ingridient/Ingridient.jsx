import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingridient.module.css";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const Ingridient = ({item, showIngridientsModal }) => {
  return (
    <div
      onClick={showIngridientsModal}
      className={`${styles.ingridient__wpapper} mt-6 ml-4 mr-6`}
    >
      <img src={item.image} alt={item.name} />
      <Counter count={1} size="default" />
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

Ingridient.propTypes = {
  showIngridientsModal: PropTypes.func,
  item: ingredientPropType,
}

export default Ingridient;
