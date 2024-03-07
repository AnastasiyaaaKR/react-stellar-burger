import React, { useMemo } from "react";
import styles from "./OrderHistoryContent.module.css";
import { IIngredient, IOrder } from "../../../types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { selectIngridients } from "../../services/IngredientsSlice";
import { useAppSelector } from "../../services/storage";

interface IOrderHistoryContentProps {
  order: IOrder;
  showOrderNumber: boolean;
}

type TCountIngredient = IIngredient & { count: number };

const OrderHistoryContent = ({
  order,
  showOrderNumber,
}: IOrderHistoryContentProps) => {

  const ingredients: IIngredient[] = useAppSelector(selectIngridients);

  function getOrderStatusText(status: string) {
    if(status === 'done') {
      return "Выполнен";
    } else if(status === 'pending') {
      return "Готовится";
    } else {
      return "Создан";
    }
  };
  
  function totalOrderSum(ingredientIds: string[]) {
    const orderIngredients = ingredientIds.map((id) => {
      return ingredients.find((ingredient) => ingredient._id === id);
    });


    let sum = 0;
    for (const ingredient of orderIngredients) {
      if (ingredient !== undefined) {
        sum += ingredient.price;
      }
    }
    return sum;
  }

  const uniqueIngredients = useMemo(
    function countIngredients(): TCountIngredient[] {
      const uniqueIngredients: TCountIngredient[] = [];
      for (const ingredientId of order.ingredients) {
        const ingredient = uniqueIngredients.find(
          (ingredient) => ingredientId === ingredient._id
        );
        if (ingredient) {
          ingredient.count += 1;
        } else {
          const ingredient = ingredients.find(
            (ingredient) => ingredient._id === ingredientId
          );
          if (ingredient) {
            uniqueIngredients.push({ ...ingredient, count: 1 });
          }
        }
      }
      return uniqueIngredients;
    },
    [order, ingredients]
  );

  return (
    <div className={styles.FeedId__wrapper}>
      {showOrderNumber && (
        <p
          className={`${styles.FeedId__number} text text_type_digits-default mb-10`}
        >
          {order.number}
        </p>
      )}
      <p className="text text_type_main-medium mb-3">{order.name}</p>
      <p
        className={`${styles.FeedId__status} mb-15 text text_type_main-default`}
      >
        {getOrderStatusText(order.status)}
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={`${styles.FeedId__list} custom-scroll`}>
        {uniqueIngredients.map((ingredient) => {
          return (
            <li className={`${styles.FeedId__item} mb-4 pr-6`}>
              <div className={styles.img__wrapper}>
                <img className={styles.FeedId__img} src={ingredient.image} />
                <p className="text text_type_main-default">{ingredient.name}</p>
              </div>
              <div className={styles.price__wrapper}>
                <p className="text text_type_digits-default mr-2">{ingredient.count} x {ingredient.price}</p>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`${styles.finalyPrice__wrapper} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)}></FormattedDate>
        </p>
        <div className={styles.price__wrapper}>
          <p className="text text_type_digits-default mr-2">{totalOrderSum(order.ingredients)}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryContent;