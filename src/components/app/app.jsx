import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Content from "../Content/Content";
import AppHeader from "../AppHeader/AppHeader";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const domen = 'https://norma.nomoreparties.space/api/ingredients';

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
       return fetch(domen)
      .then(getResponseData) 
    }
      getIngridients()
      .then((res) => {
        setIngredients(res.data)
    })
  }, 
  []);

  const [visible, setVisible] = useState(false);
  const showOrderDetails = () => {
    setVisible(true) 
  }
  const closeOrderDetails = () => {
    setVisible(false) 
  }

  const[fullInformation, setFullInformation] = useState(false);
  const [fullCard, setFullCard] = useState({});
  const showIngridientDetails = (item) => {
    setFullInformation(true);
    setFullCard(item)
  }

  const closeIngridientDetails = () => {
    setFullInformation(false);
  }

   return (
    <div className={styles.app}>
      <pre style={{
      	margin: "auto",
      	fontSize: "1.5rem"
      }}>
        <AppHeader/>
        <Content ingredients={ingredients} showModal={showOrderDetails} showIngridientsModal={showIngridientDetails}/>
        <OrderDetails visible={visible} closeModal={closeOrderDetails}/>
        <IngredientDetails item={fullCard} fullInformation={fullInformation} ingredients={ingredients} closeModal={closeIngridientDetails}/>
      </pre>
    </div>
  );
}

export default App;
