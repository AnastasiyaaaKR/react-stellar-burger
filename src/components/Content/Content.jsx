import React from "react";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./Content.module.css";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const Content = ({ visible, ingredients, showModal, showIngridientsModal }) => {
  return (
    <main className={styles.content__wrapper}>
      <BurgerIngridients
        visible={visible}
        ingredients={ingredients}
        showIngridientsModal={showIngridientsModal}
      />
      <BurgerConstructor ingredients={ingredients} showModal={showModal} />
    </main>
  );
};

Content.propTypes = {
  showModal: PropTypes.func,
  ingredients: PropTypes.arrayOf(ingredientPropType),
  showIngridientsModal: PropTypes.func,
  visible: PropTypes.bool,
}

export default Content;
