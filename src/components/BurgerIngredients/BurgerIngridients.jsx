import React from "react";
import styles from './BurgerIngridients.module.css'
import IngridientsHeader from "../../IngridientsHeader/IngridientsHeader";
import Ingridients from "../Ingridients/Ingridients";

const BurgerIngridients = () => {
  return (
    <div>
      <IngridientsHeader/>
      <Ingridients/>
    </div>
  )
}

export default BurgerIngridients