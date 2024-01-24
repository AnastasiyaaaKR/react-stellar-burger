import React from "react";
import styles from "./IngridientsList.module.css";
import Ingridient from "../Ingridient/Ingridient";
import { Link } from "react-router-dom";
import { IIngredient } from "../../../types";

interface IIngridientsListProps {
  name: string, 
  type: string, 
  ingredients: IIngredient[]
  showIngridientsModal: (item: IIngredient) => void,
}

const IngridientsList = React.forwardRef<HTMLDivElement, IIngridientsListProps>(
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

export default IngridientsList;
