import React from "react";
import styles from "./ConstructorIngridient.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectConstructorIngridients, changeIngridients } from "../../services/constructorIngridientSlice";

const ConstructorIngridient = ({ ingredient, index }) => {
  const burgerArr = useSelector(selectConstructorIngridients);
  const findIndex = (item) => {
    return burgerArr.indexOf(item);
  };
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "sort",
    item: { data: ingredient },
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ data }) {
      if (data._constId !== ingredient._constId) {
        dispatch(changeIngridients({
          indexFrom: findIndex(data),
          indexTo: index,
          ingridient: data,
        }));
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
