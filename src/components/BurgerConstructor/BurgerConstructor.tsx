import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { useDrop } from "react-dnd";
import {
  addNewIngridient,
  setBun,
} from "../../services/constructorIngridientSlice";
import {
  selectConstructorIngridients,
  selectConstructorBun,
  cleanBurgerIngridients,
} from "../../services/constructorIngridientSlice";
import { v4 as uuidv4 } from "uuid";
import ConstructorIngridient from "../ConstructorIngridient/ConstructorIngridient";
import { createOrder as createOrderAction } from "../../services/orderNumberSlice";
import {
  incrementCount,
  incrementCountBun,
} from "../../services/IngredientsSlice";
import { IIngredient } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../services/storage";
import { useLocation, useNavigate } from "react-router-dom";
interface IBurgerConstructorProps {
  showModal: () => void;
}

const BurgerConstructor = ({ showModal }: IBurgerConstructorProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((store) => store.user.user);
  const dispatch = useAppDispatch();

  const createOrder = (): void => {
    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    let arrOfIds: string[] = [];
    for (const ingridient of constructorIngredients) {
      arrOfIds.push(ingridient._id);
    }
    if (constructorBun) {
      arrOfIds.push(constructorBun._id);
    }
    dispatch(createOrderAction(arrOfIds))
      .unwrap()
      .then(showModal)
      .then(() => dispatch(cleanBurgerIngridients()));
  };

  const constructorIngredients: IIngredient[] = useAppSelector(selectConstructorIngridients);
  const constructorBun = useAppSelector(selectConstructorBun);
  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(item: IIngredient) {
      if (item.type === "bun") {
        dispatch(setBun(item));
        dispatch(incrementCountBun(item._id));
      } else {
        const newIngridient = { ...item, _constId: uuidv4() };
        dispatch(addNewIngridient(newIngridient));
        dispatch(incrementCount(item._id));
      }
    },
  });

  const price: number = useMemo(() => {
    let ingridientCost: number = 0;
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
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles.button__wrapper} ml-10`}>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={createOrder}
            disabled={!constructorBun || !constructorIngredients.length}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
