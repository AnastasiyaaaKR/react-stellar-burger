import React from "react";
import Buns from "../Buns/Buns";
import Sauces from "../Sauces/Sauces";
import Fillings from "../Fillings/Fillings";
import styles from './Ingridients.module.css'

const Ingridients = () => {
  return (
    <div className={`${styles.section__ingridients} custom-scroll`}>
      <Buns />
      <Sauces />
      <Fillings />
    </div>
  )}


export default Ingridients