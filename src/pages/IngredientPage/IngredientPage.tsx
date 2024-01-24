import React, { useEffect, useState } from "react";
import styles from "./IngredientPage.module.css";
import { useParams } from "react-router";
import IngredientDetailsContent from "../../components/IngredientDetailsContent/IngredientDetailsContent";
import { selectIngridients } from "../../services/IngredientsSlice";
import { useSelector } from "react-redux";
import { IIngredient } from "../../../types";

const IngredientPage = () => {
  const ingredients: IIngredient[] = useSelector(selectIngridients);
  const params = useParams();
  const [ingredient, ] = useState(null);

  function findIngridient(paramsId: string | undefined): IIngredient | undefined {
    for (const ingredient of ingredients) {
      if (paramsId === ingredient._id) {
        return ingredient;
      }
    }
  }

  useEffect(() => {
    findIngridient(params._id);
  }, [params]);

  return (
    ingredient && (
      <div className={styles.Ingredient__wrapper}>
        <IngredientDetailsContent item={ingredient} />
      </div>
    )
  );
};

export default IngredientPage;
