import React from "react";
import styles from "./Ingridients.module.css";
import IngridientsList from "../IngridientsList/IngridientsList";
import { useInView } from "react-intersection-observer";
import { setCurrentType } from "../../services/IngredientsSlice";
import { IIngredient } from "../../../types";
import { useAppDispatch } from "../../services/storage";

interface IIngridientsProps {
  ingredients: IIngredient[], 
}

const Ingridients = ({ ingredients }: IIngridientsProps) => {

  const dispatch = useAppDispatch();
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
      />
      <IngridientsList
        ingredients={ingredients}
        ref={saucesRef}
        type="sauce"
        name="Соусы"
      />
      <IngridientsList
        ingredients={ingredients}
        ref={mainsRef}
        type="main"
        name="Начинки"
      />
    </div>
  );
};

export default Ingridients;
