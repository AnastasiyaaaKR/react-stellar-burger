import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Content from "../Content/Content";
import AppHeader from "../AppHeader/AppHeader";
import OrderDetailsModal from "../OrderDetailsModal/OrderDetailsModal";
import IngredientDetailsModal from "../IngredientDetailsModal/IngredientDetailsModal";

const domen = "https://norma.nomoreparties.space/api/ingredients";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngridients = () => {
      return fetch(domen).then(getResponseData);
    };
    getIngridients()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const [visible, setVisible] = useState(false);
  const showOrderDetails = () => {
    setVisible(true);
  };
  const closeOrderDetails = () => {
    setVisible(false);
  };

  const [fullInformation, setFullInformation] = useState(false);
  const [fullCard, setFullCard] = useState({});
  const showIngridientDetails = (item) => {
    setFullInformation(true);
    setFullCard(item);
  };

  const closeIngridientDetails = () => {
    setFullInformation(false);
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
          item={fullCard}
          fullInformation={fullInformation}
          ingredients={ingredients}
          closeModal={closeIngridientDetails}
        />
    </div>
  );
}

export default App;
