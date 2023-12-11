import React from "react";
import styles from "./Ingridients.module.css";
import IngridientsList from "../IngridientsList/IngridientsList";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const Ingridients = ({ ingredients, showIngridientsModal }) => {
  return (
    <div className={`${styles.section__ingridients} custom-scroll`}>
      <IngridientsList
        ingredients={ingredients}
        type="bun"
        name="Булки"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        type="sauce"
        name="Соусы"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        type="main"
        name="Начинки"
        showIngridientsModal={showIngridientsModal}
      />
    </div>
  );
};

Ingridients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  showIngridientsModal: PropTypes.func,
}

export default Ingridients;
