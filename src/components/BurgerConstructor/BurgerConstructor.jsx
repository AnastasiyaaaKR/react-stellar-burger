import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const BurgerConstructor = ({ ingredients, showModal }) => {
  const burger = {
    bun: ingredients.find((item) => {
      return item.type === "bun";
    }),
    ingredients: ingredients.filter((item) => {
      return item.type !== "bun";
    }),
  };

  if (burger.bun) {
    return (
      <div className={`text text_type_main-small ${styles.burger__wrapper}`}>
        <div className="ml-8">
          <ConstructorElement
            extraClass={styles.ConstructorElement}
            type="top"
            isLocked={true}
            text={`${burger.bun.name} (верх)`}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        </div>
        <div className={`${styles.ingridients__wrapper} custom-scroll`}>
          {burger.ingredients.map((ingredient) => (
            <div
              className={styles.ConstructorElement__wrapper}
              key={ingredient._id}
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
          ))}
        </div>
        <div className="ml-8">
          <ConstructorElement
            extraClass={styles.ConstructorElement}
            type="bottom"
            isLocked={true}
            text={`${burger.bun.name} (низ)`}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        </div>
        <div className={styles.order__wrapper}>
          <p
            className={`${styles.ingridient__costText}text text_type_digits-default`}
          >
            610
          </p>
          <div className={`mr-10${styles.icon__wrapper}`}>
            <CurrencyIcon type="primary" className="mr-10" />
          </div>
          <div className="ml-10">
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
  }
  return null;
};

BurgerConstructor.propTypes = {
  showModal: PropTypes.func,
  ingredients: PropTypes.arrayOf(ingredientPropType),
}

export default BurgerConstructor;
