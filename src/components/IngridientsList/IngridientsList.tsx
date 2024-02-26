import React from "react";
import styles from "./IngridientsList.module.css";
import Ingridient from "../Ingridient/Ingridient";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../../types";

interface IIngridientsListProps {
  name: string;
  type: string;
  ingredients: IIngredient[];
  showIngridientsModal: (item: IIngredient) => void;
}

const IngridientsList = React.forwardRef<HTMLDivElement, IIngridientsListProps>(
  ({ name, type, ingredients, showIngridientsModal }, ref) => {
    const items = ingredients.filter((item) => {
      return item.type === type;
    });

    const location = useLocation();

    return (
      <div ref={ref} className="pl-4" >
        <p className="text text_type_main-medium mt-10">{name}</p>
        <ul className={`mb-10`}>
          <li className={`${styles.IngridientsList}`}>
            {items.map((item) => {
              return (
                <Link
                  to={`/ingredients/${item._id}`}
                  state={{ background: location }}
                  className={styles.IngridientsList__link}
                  onClick={() => {
                    showIngridientsModal(item);
                  }}
                  key={item._id}
                >
                  <Ingridient
                    item={item}
                    key={item._id}
                  />
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
);

export default IngridientsList;
