import React, { useEffect, useMemo } from "react";
import styles from "./HistoryId.module.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IIngredient, IOrder } from "../../../types";
import { selectOrders } from "../../services/orders/reducer";
import {
  fetchIngridients,
  selectIngridients,
} from "../../services/IngredientsSlice";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import OrderHistoryContent from "../../components/OrderHistoryContent/OrderHistoryContent";

const accessToken = localStorage.getItem("accessToken")?.replace('Bearer ','');
const ordersServerUrl = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;

const HistoryId = () => {
  const dispatch = useDispatch();
  // const disconnect = () => dispatch(disconnectOrders());

  useEffect(() => {
    dispatch(connectOrders(ordersServerUrl));
    if (ingredients.length === 0) {
      dispatch(fetchIngridients());
    }
  }, [dispatch]);

  const orders = useSelector(selectOrders);
  const ingredients: IIngredient[] = useSelector(selectIngridients);

  const params = useParams();

  function findOrder(): IOrder | undefined {
    for (const order of orders) {
      if (params.id === order._id) {
        return order;
      }
    }
  }

  const order = useMemo(findOrder, [params.id, orders]);

  if (order) {
    return (
      <div className={styles.HistoryId__wrapper}>
        <h1
          className={`${styles.HistoryId__header} text text_type_main-medium`}
        >
          #{order.number}
        </h1>
        <OrderHistoryContent order={order} showOrderNumber={true} />
      </div>
    );
  } else {
    return null;
  }
};

export default HistoryId;
