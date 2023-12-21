import React from "react";
import styles from "./ConstructorIngridient.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectConstructorIngridients,
  changeIngridients,
  removeIngridient,
} from "../../services/constructorIngridientSlice";
import { decrementCount } from "../../services/IngridientsSlice";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

const ConstructorIngridient = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const deleteBurgerIngridient = () => {
    dispatch(removeIngridient(ingredient));
    dispatch(decrementCount(ingredient._id))
  };
  const burgerArr = useSelector(selectConstructorIngridients);
  const findIndex = (item) => {
    return burgerArr.indexOf(item);
  };
  const [, dragRef] = useDrag({
    type: "sort",
    item: { data: ingredient },
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ data }) {
      if (data._constId !== ingredient._constId) {
        dispatch(
          changeIngridients({
            indexFrom: findIndex(data),
            indexTo: index,
            ingridient: data,
          })
        );
      }
    },
  });

  return (
    <div
      className={styles.ConstructorElement__wrapper}
      key={ingredient._id}
      ref={(node) => dropRef(dragRef(node))}
    >
      <div className={styles.icon__wrapper}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        handleClose={deleteBurgerIngridient}
        extraClass={styles.ConstructorElement}
        key={ingredient._id}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
};

ConstructorIngridient.propTypes = {
  index: PropTypes.number,
  ingredient: ingredientPropType,
};

export default ConstructorIngridient;
