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
import { decrementCount } from "../../services/IngredientsSlice";
import {IIngredient} from "../../../types";

interface IConstructorIngridientProps {
  ingredient: IIngredient,
  index: number,
}

const ConstructorIngridient = ({ ingredient, index }: IConstructorIngridientProps) => {
  const dispatch = useDispatch();
  const deleteBurgerIngridient = (): void => {
    dispatch(removeIngridient(ingredient));
    dispatch(decrementCount(ingredient._id))
  };
  const burgerArr: IIngredient[] = useSelector(selectConstructorIngridients);
  const findIndex = (item: IIngredient): number => {
    return burgerArr.indexOf(item);
  };
  const [, dragRef] = useDrag({
    type: "sort",
    item: { data: ingredient },
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ data }: { data: IIngredient }) {
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

export default ConstructorIngridient;
