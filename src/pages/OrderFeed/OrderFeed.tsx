import React, { useEffect } from "react";
import { Location } from "react-router-dom";
import styles from "./OrderFeed.module.css";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import {
  selectOrders,
  selectTotal,
  selectTotalToday,
} from "../../services/orders/reducer";
import { selectIngridients } from "../../services/IngredientsSlice";
import { IIngredient } from "../../../types";
import Orders from "../../components/Orders/Orders";
import { wsBaseUrl } from "../../api";
import { useAppDispatch, useAppSelector } from "../../services/storage";

interface IOrderFeedProps {
  location: Location;
}

const ordersServerUrl = `${wsBaseUrl}/all`;

const getOrderId = (location: Location): string | null => {
  const { pathname } = location;
  const match = pathname.match(/\/feed\/(.+)/);
  if (!match) return null;

  return match[1];
};

const OrderFeed = ({ location }: IOrderFeedProps) => {
  const dispatch = useAppDispatch();
  const disconnect = () => {
    dispatch(disconnectOrders());
  };

  useEffect(() => {
    dispatch(connectOrders(ordersServerUrl));
    return disconnect;
  }, [dispatch]);

  const ingredients: IIngredient[] = useAppSelector(selectIngridients);
  const orders = useAppSelector(selectOrders);
  const total = useAppSelector(selectTotal);
  const totalToday = useAppSelector(selectTotalToday);

  return (
    <div className={styles.OrderFeed__wrapper}>
      <div className="mr-15">
        <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
        <Orders
          orders={orders}
          ingredients={ingredients}
          pathToOrder={"/feed/"}
          selectedOrderId={getOrderId(location)}
        />
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
                    <li
                      className={styles.informationBoard__text__inner}
                      key={order._id}
                    >
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
