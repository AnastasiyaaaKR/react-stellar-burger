import React from "react";
import Buns from "../Buns/Buns";
import Sauces from "../Sauces/Sauces";
import Fillings from "../Fillings/Fillings";
import styles from './Ingridients.module.css'

const Ingridients = ({ingredients, showIngridientsModal}) => {
  const buns = ingredients.filter((item) => {
    return item.type !== 'bun';
  })
  const sauces = ingredients.filter((item) => {
      return item.type === 'sauce';
  })
  const fillings = ingredients.filter((item) => {
      return item.type === 'main';
  })
  return (
    <div className={`${styles.section__ingridients} custom-scroll`}>
      <Buns buns={buns} showIngridientsModal={showIngridientsModal}/>
      <Sauces sauces ={sauces} showIngridientsModal={showIngridientsModal}/>
      <Fillings fillings ={fillings} showIngridientsModal={showIngridientsModal}/>
    </div>
  )}


export default Ingridients