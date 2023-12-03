import React from 'react';
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./Content.module.css";

const Content = ({visible, ingredients, showModal, showIngridientsModal}) => {
  return (
    <div className={styles.content__wrapper}>
    <BurgerIngridients visible={visible} ingredients={ingredients} showIngridientsModal={showIngridientsModal} />
    <BurgerConstructor ingredients={ingredients} showModal={showModal}/>
    </div>
  )
}

export default Content