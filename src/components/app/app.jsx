import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Content from "../Content/Content";
import AppHeader from "../AppHeader/AppHeader";
import OrderDetailsModal from "../OrderDetailsModal/OrderDetailsModal";
import IngredientDetailsModal from "../IngredientDetailsModal/IngredientDetailsModal";
import {
  selectIngridients,
  fetchIngridients,
} from "../../services/IngridientsSlice";
import {
  selectModalIngridient,
  setModalIngredient,
  deleteModalIngridient,
} from "../../services/modalIngridientSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const ingredients = useSelector(selectIngridients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngridients());
  }, []);

  const [visible, setVisible] = useState(false);
  const showOrderDetails = () => {
    setVisible(true);
  };
  const closeOrderDetails = () => {
    setVisible(false);
  };

  const [fullInformation, setFullInformation] = useState(false);
  const modalIngredient = useSelector(selectModalIngridient);
  const showIngridientDetails = (item) => {
    setFullInformation(true);
    dispatch(setModalIngredient(item));
  };

  const closeIngridientDetails = () => {
    setFullInformation(false);
    dispatch(deleteModalIngridient());
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Content
        ingredients={ingredients}
        showModal={showOrderDetails}
        showIngridientsModal={showIngridientDetails}
      />
      <OrderDetailsModal visible={visible} closeModal={closeOrderDetails} />
      <IngredientDetailsModal
        item={modalIngredient}
        fullInformation={fullInformation}
        closeModal={closeIngridientDetails}
      />
    </div>
  );
}

export default App;
