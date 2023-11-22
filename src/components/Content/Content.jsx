import React from "react"
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.content__wrapper}>
    <BurgerIngridients/>
    <BurgerConstructor/>
    </div>
  )
}

export default Content