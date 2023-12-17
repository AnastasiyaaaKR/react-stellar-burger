import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  addNewIngridient,
  setBun,
} from "../../services/constructorIngridientSlice";
import {
  selectConstructorIngridients,
  selectConstructorBun,
} from "../../services/constructorIngridientSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ConstructorIngridient from "../ConstructorIngridient/ConstructorIngridient";

const BurgerConstructor = ({ showModal }) => {
  const constructorIngredients = useSelector(selectConstructorIngridients);
  const constructorBun = useSelector(selectConstructorBun);
  const dispatch = useDispatch();
  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        const newIngridient = { ...item, _constId: uuidv4() };
        dispatch(addNewIngridient(newIngridient));
      }
    },
  });

  const price = useMemo(() => {
    let ingridientCost = 0;
    for (const inridient of constructorIngredients) {
      ingridientCost += inridient.price;
    }
    if (constructorBun) {
      ingridientCost += constructorBun.price * 2;
    }
    return ingridientCost;
  }, [constructorBun, constructorIngredients]);

  return (
    <div
      className={`text text_type_main-small ${styles.burger__wrapper}`}
      ref={dropRef}
    >
      {constructorBun && (
        <div className="ml-8">
          <ConstructorElement
            extraClass={styles.ConstructorElement}
            type="top"
            isLocked={true}
            text={`${constructorBun.name} (верх)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
          />
        </div>
      )}
      <div className={`${styles.ingridients__wrapper} custom-scroll`}>
        {constructorIngredients.map((ingredient, index) => (
          <ConstructorIngridient
            key={ingredient._constId}
            ingredient={ingredient}
            index={index}
          />
        ))}
      </div>
      {constructorBun && (
        <div className="ml-8">
          <ConstructorElement
            extraClass={styles.ConstructorElement}
            type="bottom"
            isLocked={true}
            text={`${constructorBun.name} (низ)`}
            price={constructorBun.price}
            thumbnail={constructorBun.image}
          />
        </div>
      )}
      <div className={styles.order__wrapper}>
        <p
          className={`${styles.ingridient__costText} text text_type_digits-default`}
        >
          {price}
        </p>
        <div className={`mr-10${styles.icon__wrapper}`}>
          <CurrencyIcon type="primary" className="mr-10" />
        </div>
        <div className={`${styles.button__wrapper} ml-10`}>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={showModal}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  showModal: PropTypes.func,
};

export default BurgerConstructor;
