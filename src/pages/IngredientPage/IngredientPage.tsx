import React, { useEffect, useMemo } from "react";
import styles from "./IngredientPage.module.css";
import { useParams } from "react-router";
import IngredientDetailsContent from "../../components/IngredientDetailsContent/IngredientDetailsContent";
import {
  fetchIngridients,
  selectIngridients,
} from "../../services/IngredientsSlice";
import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../../types";

const IngredientPage = () => {
  const ingredients: IIngredient[] = useSelector(selectIngridients);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngridients());
  }, []);

  function findIngridient(): IIngredient | undefined {
    for (const ingredient of ingredients) {
      if (params.id === ingredient._id) {
        return ingredient;
      }
    }
  }

  const ingredient = useMemo(findIngridient, [params.id, ingredients]);

  if (ingredient) {
    return (
        <div className={styles.Ingredient__wrapper}>
          <h1 className={`${styles.Ingredient__header} text text_type_main-medium`}>Детали ингредиента</h1>
          <IngredientDetailsContent item={ingredient} />
        </div>
    );
  } else {
    return null;
  }
};

export default IngredientPage;
