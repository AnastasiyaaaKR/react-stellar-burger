import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetailsContent from "../IngredientDetailsContent/IngredientDetailsContent";
import {IIngredient} from "../../../types";

interface IIngredientDetailsContentProps {
  item: IIngredient,
  fullInformation: boolean,
  closeModal: () => void,
}

const IngredientDetailsModal = ({
  fullInformation,
  item,
  closeModal,
}: IIngredientDetailsContentProps) => {
  if (fullInformation) {
    return (
      <Modal closeModal={closeModal} title="Детали ингредиента">
        <IngredientDetailsContent item={item}/>
      </Modal>
    );
  }
  return null;
};

export default IngredientDetailsModal;
