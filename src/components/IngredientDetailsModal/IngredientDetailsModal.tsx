import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetailsContent from "../IngredientDetailsContent/IngredientDetailsContent";
import { useAppSelector } from "../../services/storage";
import { selectIngridients } from "../../services/IngredientsSlice";

interface IIngredientDetailsContentProps {
  ingredientId: string,
  fullInformation: boolean,
  closeModal: () => void,
}

const IngredientDetailsModal = ({
  fullInformation,
  ingredientId,
  closeModal,
}: IIngredientDetailsContentProps) => {
  const ingredients = useAppSelector(selectIngridients);
  const item = ingredients.find((item) => item._id === ingredientId);
  if (fullInformation && item) {
    return (
      <Modal closeModal={closeModal} title="Детали ингредиента">
        <IngredientDetailsContent item={item}/>
      </Modal>
    );
  }
  return null;
};

export default IngredientDetailsModal;
