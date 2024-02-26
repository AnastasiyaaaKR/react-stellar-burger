import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Content from "../../components/Content/Content";
import OrderDetailsModal from "../../components/OrderDetailsModal/OrderDetailsModal";
import IngredientDetailsModal from "../../components/IngredientDetailsModal/IngredientDetailsModal";
import {
  selectIngridients,
  fetchIngridients,
} from "../../services/IngredientsSlice";
import {
  selectModalIngridient,
  setModalIngredient,
  deleteModalIngridient,
} from "../../services/modalIngridientSlice";
import { useSelector, useDispatch } from "react-redux";
import { IIngredient } from "../../../types";

function Main() {
  const ingredients:  IIngredient[]= useSelector(selectIngridients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngridients());
  }, []);

  const [visible, setVisible] = useState(false);

  const showOrderDetails = (): void => {
    setVisible(true);
  };

  const closeOrderDetails = (): void => {
    setVisible(false);
  };

  const [fullInformation, setFullInformation] = useState(false);

  const modalIngredient = useSelector(selectModalIngridient);

  const showIngridientDetails = (item: IIngredient): void => {
    setFullInformation(true);
    dispatch(setModalIngredient(item));
  };

  const closeIngridientDetails = (): void => {
    setFullInformation(false);
    dispatch(deleteModalIngridient());
  };

  return (
    <div className={styles.app}>
      <Content
        ingredients={ingredients}
        showModal={showOrderDetails}
        showIngridientsModal={showIngridientDetails}
      />
      <OrderDetailsModal visible={visible} closeModal={closeOrderDetails} />
      {modalIngredient && (<IngredientDetailsModal
        item={modalIngredient}
        fullInformation={fullInformation}
        closeModal={closeIngridientDetails}
      />)}
    </div>
  );
}

export default Main;
