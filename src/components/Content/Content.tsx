import React from "react";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./Content.module.css";
import { IIngredient } from "../../../types";

interface IContentProps {
  ingredients: IIngredient[]
  showModal: () => void;
  showIngridientsModal: (item:IIngredient) => void,
}

const Content = ({ ingredients, showModal, showIngridientsModal }: IContentProps) => {
  return (
    <main className={styles.content__wrapper}>
      <BurgerIngridients
        ingredients={ingredients}
        showIngridientsModal={showIngridientsModal}
      />
      <BurgerConstructor showModal={showModal} />
    </main>
  );
};

export default Content;
