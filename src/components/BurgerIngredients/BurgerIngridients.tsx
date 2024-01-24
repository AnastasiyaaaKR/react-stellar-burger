import React from "react";
import IngridientsHeader from "../IngridientsHeader/IngridientsHeader";
import Ingridients from "../Ingridients/Ingridients";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectCurrentType } from "../../services/IngredientsSlice";
import { useSelector } from "react-redux";
import styles from './BurgerIngridients.module.css';
import { IIngredient } from "../../../types";

interface IBurgerIngridientsProps {
  ingredients: IIngredient[],
  showIngridientsModal: (item: IIngredient) => void,
}

const BurgerIngridients = ({ ingredients, showIngridientsModal }: IBurgerIngridientsProps) => {
  const current = useSelector(selectCurrentType)
  const [cur, setCur] = React.useState('one')
  return (
    <div className="mr-10">
      <IngridientsHeader />
      <div className={styles.BurgerIngridients__wrapper}>
        <Tab value="one" active={current === "bun"} onClick={setCur}>
          Булки
        </Tab>
        <Tab value="two" active={current === "sauce"} onClick={setCur}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "main"} onClick={setCur}>
          Начинки
        </Tab>
      </div>
      <Ingridients
        ingredients={ingredients}
        showIngridientsModal={showIngridientsModal}
      />
    </div>
  );
};

export default BurgerIngridients;
