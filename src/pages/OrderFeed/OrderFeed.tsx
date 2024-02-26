import React, { useEffect } from "react";
import styles from "./OrderFeed.module.css";
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
import Orders from "../../components/Orders/Orders";

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

  return (
    <div className={styles.OrderFeed__wrapper}>
      <div className="mr-15">
        <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
        <Orders orders={orders} ingredients={ingredients} pathToOrder={'/feed/'}/>
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
                    <li className={styles.informationBoard__text__inner} key={order._id}>
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
