import React, { useEffect } from "react";
import styles from "./OrderFeed.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrders,
  selectTotal,
  selectTotalToday,
} from "../../services/orders/reducer";
import {
  selectIngridients,
  fetchIngridients,
} from "../../services/IngredientsSlice";
import { IIngredient } from "../../../types";

const ordersServerUrl = "wss://norma.nomoreparties.space/orders/all";

const OrderFeed = () => {
  const dispatch = useDispatch();

  // const disconnect = () => dispatch(disconnectOrders());

  useEffect(() => {
    dispatch(connectOrders(ordersServerUrl));
    if (ingredients.length === 0) {
      dispatch(fetchIngridients());
    }
  }, [dispatch]);

  const ingredients: IIngredient[] = useSelector(selectIngridients);

  const orders = useSelector(selectOrders);

  const total = useSelector(selectTotal);

  const totalToday = useSelector(selectTotalToday);

  function getIngredientById(id: string) {
    for (const ingredient of ingredients) {
      if (ingredient._id === id) {
        return ingredient;
      }
    }
  }

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

  return (
    <div className={styles.OrderFeed__wrapper}>
      <div className="mr-15">
        <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
        <div className={`${styles.orders__wrapper} mr-2 custom-scroll`}>
          {orders.map((order) => {
            return (
              <div className="mb-4">
                <div className={styles.order__wrapper}>
                  <div className={`${styles.order__header} pt-6`}>
                    <p className="text text_type_digits-default">
                      #{order.number}
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                      <FormattedDate date={new Date(order.createdAt)} />
                    </p>
                  </div>
                  <p className="text text_type_main-medium mt-6">
                    {order.name}
                  </p>
                  <div className="mt-6 mb-6">
                    <div className={styles.cost__wrapper}>
                      <div>
                        {order.ingredients
                          .slice(0, 5)
                          .map((ingredientId, index) => {
                            const ingredient = getIngredientById(ingredientId);
                            if (ingredient) {
                              return (
                                <img
                                  className={styles.ingridients__img}
                                  style={{ left: `${-20 * index}px` }}
                                  src={ingredient.image}
                                  alt={ingredient.name}
                                />
                              );
                            }
                          })}
                        <p>
                          +3
                          <img />
                        </p>
                      </div>
                      <div className={styles.cost__wrapper}>
                        <p className="text text_type_digits-default mr-2">
                          {totalOrderSum(order.ingredients)}
                        </p>
                        <CurrencyIcon type="primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.info__wrapper}>
        <div className={`${styles.informationBoard} mb-15`}>
          <div className={styles.informationBoard__status}>
            <p className="text text_type_main-medium mb-6">Готовы:</p>
            <ul
              className={`${styles.informationBoard__left} text text_type_digits-default mr-9`}
            >
              {orders
                .filter(function (order) {
                  return order.status === "done";
                })
                .slice(0, 10)
                .map((order) => {
                  return (
                    <li className={styles.informationBoard__text__inner}>
                      {order.number}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.informationBoard__status}>
            <p className="text text_type_main-medium mb-6">В работе:</p>
            <ul
              className={`${styles.informationBoard__text} text text_type_digits-default`}
            >
              {orders
                .filter(function (order) {
                  return order.status !== "done";
                })
                .slice(0, 10)
                .map((order) => {
                  return (
                    <li className={styles.informationBoard__text__inner}>
                      {order.number}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="mb-15">
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <div className={styles.text__number}>
            <p className="text text_type_digits-large">{total}</p>
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <div className={styles.text__number}>
            <p className="text text_type_digits-large">{totalToday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFeed;
