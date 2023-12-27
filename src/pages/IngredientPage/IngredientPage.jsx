import React, { useEffect, useState } from "react";
import styles from "./IngredientPage.module.css";
import { useParams } from "react-router";
import IngredientDetailsContent from "../../components/IngredientDetailsContent/IngredientDetailsContent";
import {
  selectIngridients
} from "../../services/IngridientsSlice";
import { useSelector } from "react-redux";

const IngredientPage = () => {
  const ingredients = useSelector(selectIngridients);
  const params = useParams();
  const [ingredient, setIngredient] = useState(null)

  function findIngridient(paramsId) {
    for(const ingredient of ingredients){
      if(paramsId === ingredient._id) {
      return ingredient;
    } ;
    }
  };

  useEffect(() => {
    findIngridient(params._id) 
  }, [params])

  
  return (
    ingredient && 
      <div className={styles.Ingredient__wrapper}>
        <IngredientDetailsContent item ={setIngredient(ingredient)}/>
    </div>
  )
};

 export default IngredientPage;

