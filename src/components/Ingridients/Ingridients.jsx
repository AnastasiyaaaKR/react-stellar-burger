import React from "react";
import styles from "./Ingridients.module.css";
import IngridientsList from "../IngridientsList/IngridientsList";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import { useInView } from "react-intersection-observer";

const Ingridients = ({ ingredients, showIngridientsModal }) => {

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  console.log(inViewBuns);
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });
  const [mainsRef, inViewFilling] = useInView({ threshold: 0 });


  return (
    <div className={`${styles.section__ingridients} custom-scroll`}>
      <IngridientsList
        ingredients={ingredients}
        innerRef={bunsRef}
        type="bun"
        name="Булки"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        innerRef={saucesRef}
        type="sauce"
        name="Соусы"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        innerRef={mainsRef}
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
