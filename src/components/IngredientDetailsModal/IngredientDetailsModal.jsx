import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetailsContent from "../IngredientDetailsContent/IngredientDetailsContent";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const IngredientDetailsModal = ({
  ingredients,
  fullInformation,
  item,
  closeModal,
}) => {
  if (fullInformation) {
    return (
      <Modal closeModal={closeModal} title="Детали ингредиента">
        <IngredientDetailsContent item={item} ingredients={ingredients}/>
      </Modal>
    );
  }
  return null;
};

IngredientDetailsModal.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
  item: PropTypes.object,
  fullInformation: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default IngredientDetailsModal;
