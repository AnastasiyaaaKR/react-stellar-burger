import React from "react";
import styles from "./IngredientDetailsContent.module.css";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const IngredientDetailsContent = ({item, ingredients}) => {
  return(
    <div>
      <div className={styles.image__wrapper}>
          <img
            className={styles.IngredientDetailsContent__image}
            src={item.image}
            alt={item.name}
          />
        </div>
        <p
          className={`${styles.IngredientDetailsContent__header} text text_type_main-medium mt-4 mb-8`}
        >
          {ingredients.name}
        </p>
        <div className={`${styles.Details__wrapper} mb-15`}>
          <div className="mr-5">
            <p className="text text_type_main-default text_color_inactive m-0">
              Калории,ккал
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.calories}
            </p>
          </div>
          <div className="mr-5">
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.proteins}
            </p>
          </div>
          <div className="mr-5">
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.fat}
            </p>
          </div>
          <div className="mr-5">
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {item.carbohydrates}
            </p>
          </div>
        </div>
    </div>
  )
};

IngredientDetailsContent.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  item: PropTypes.object,
}

export default IngredientDetailsContent;