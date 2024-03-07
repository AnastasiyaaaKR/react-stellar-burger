import React, { useState } from "react";
import { Location } from 'react-router-dom'
import styles from "./Main.module.css";
import Content from "../../components/Content/Content";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import IngredientDetailsModal from "../../components/IngredientDetailsModal/IngredientDetailsModal";
import {
  selectIngridients,
} from "../../services/IngredientsSlice";
import { IIngredient } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../services/storage";

interface IMainProps {
  location: Location,
}
const getIngredientId = (location: Location): string | null => {
  const { pathname } = location;
  const match = pathname.match(/\/ingredients\/(.+)/);
  if (!match) return null;

  return match[1];
}

function Main({location}: IMainProps) {
  const ingredients:  IIngredient[]= useAppSelector(selectIngridients);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const ingredientId = getIngredientId(location);
  const showOrderDetails = (): void => {
    setVisible(true);
  };

  const closeOrderDetails = (): void => {
    setVisible(false);
  };

  const fullInformation = Boolean(getIngredientId(location));

  const closeIngridientDetails = (): void => {
    navigate("/");
  };

  return (
    <div className={styles.app}>
      <Content
        ingredients={ingredients}
        showModal={showOrderDetails}
      />
      <OrderDetailsModal visible={visible} closeModal={closeOrderDetails} />
      {ingredientId && (<IngredientDetailsModal
        ingredientId={ingredientId}
        fullInformation={fullInformation}
        closeModal={closeIngridientDetails}
      />)}
    </div>
  );
}

export default Main;
