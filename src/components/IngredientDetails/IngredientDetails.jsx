import React from "react";
import Modal from "../Modal/Modal";
import styles from "./IngredientDetails.module.css";

const IngredientDetails  = ({ingredients, fullInformation, item, closeModal}) => {
  if(fullInformation) {
    return (
    <Modal closeModal={closeModal} title='Детали ингредиента'>
      <div className={styles.image__wrapper}>
        <img className={styles.IngredientDetails__image} src={item.image} alt={item.name} />
      </div>
      <p className={`${styles.IngredientDetails__header} text text_type_main-medium mt-4 mb-8`}>{ingredients.name}</p>
      <div className={`${styles.Details__wrapper} mb-15`}>
        <div className="mr-5">
          <p className="text text_type_main-default text_color_inactive m-0">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">{item.calories}</p>
        </div>
        <div className="mr-5">
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.proteins}</p>
        </div>
        <div className="mr-5">
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.fat}</p>
        </div>
        <div className="mr-5">
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.carbohydrates}</p>
        </div>
      </div>
    </Modal>
  )
  } return null
}

export default IngredientDetails;