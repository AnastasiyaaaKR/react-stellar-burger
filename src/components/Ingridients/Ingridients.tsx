import React, { useEffect } from "react";
import styles from "./Ingridients.module.css";
import IngridientsList from "../IngridientsList/IngridientsList";
import { useInView } from "react-intersection-observer";
import { setCurrentType } from "../../services/IngredientsSlice";
import { useDispatch } from "react-redux";
import { IIngredient } from "../../../types";

interface IIngridientsProps {
  ingredients: IIngredient[], 
  showIngridientsModal: (item: IIngredient) => void,
}

const Ingridients = ({ ingredients, showIngridientsModal }: IIngridientsProps) => {

  const dispatch = useDispatch();
  const [bunsRef, inViewBuns] = useInView({ 
    threshold: 0,
  });

  const [saucesRef, inViewSauces] = useInView({
     threshold: 0,
    });
    
  const [mainsRef, inViewMain] = useInView({ 
    threshold: 0,
  });

  React.useEffect(() => {
    if(inViewBuns) {
      dispatch(setCurrentType('bun'))
    } else if(inViewSauces) {
      dispatch(setCurrentType('sauce'))
    } else if (inViewMain) {
      dispatch(setCurrentType('main'))
    }
  }, [inViewBuns, inViewSauces, inViewMain])

  return (
    <div className={`${styles.section__ingridients} custom-scroll`}>
      <IngridientsList
        ingredients={ingredients}
        ref={bunsRef}
        type="bun"
        name="Булки"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        ref={saucesRef}
        type="sauce"
        name="Соусы"
        showIngridientsModal={showIngridientsModal}
      />
      <IngridientsList
        ingredients={ingredients}
        ref={mainsRef}
        type="main"
        name="Начинки"
        showIngridientsModal={showIngridientsModal}
      />
    </div>
  );
};

export default Ingridients;
