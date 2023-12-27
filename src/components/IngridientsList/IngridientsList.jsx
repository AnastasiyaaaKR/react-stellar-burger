import React from "react";
import styles from "./IngridientsList.module.css";
import Ingridient from "../Ingridient/Ingridient";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import { Link } from "react-router-dom";

const IngridientsList = React.forwardRef(
  ({ name, type, ingredients, showIngridientsModal }, ref) => {
    const items = ingredients.filter((item) => {
      return item.type === type;
    });
    return (
      <div ref={ref} className={`${styles.IngridientsList__section} pl-4`}>
        <p className="text text_type_main-medium mt-10">{name}</p>
        <div className={`mb-10`}>
          <div className={`${styles.IngridientsList}`}>
            {items.map((item) => {
              return (
                <Link to={`/ingredients/${item._id}`} className={styles.IngridientsList__link}>
                  <Ingridient
                    showIngridientsModal={() => {
                      showIngridientsModal(item);
                    }}
                    item={item}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    key={item._id}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

IngridientsList.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  ingredients: PropTypes.arrayOf(ingredientPropType),
  showIngridientsModal: PropTypes.func,
};

export default IngridientsList;
