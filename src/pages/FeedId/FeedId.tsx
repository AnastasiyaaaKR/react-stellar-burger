import React, { useEffect, useMemo } from "react";
import styles from "./FeedId.module.css";
import { useParams } from "react-router";
import { IIngredient, IOrder } from "../../../types";
import { selectOrders } from "../../services/orders/reducer";
import FeedIdDetailsContent from "../../components/FeedIdDetailsContent/FeedIdDetailsContent";
import { selectIngridients } from "../../services/IngredientsSlice";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import { wsBaseUrl } from "../../api";
import { useAppDispatch, useAppSelector } from "../../services/storage";

const ordersServerUrl = `${wsBaseUrl}/all`;

const FeedId = () => {
  const dispatch = useAppDispatch();
  const disconnect = () => {
    dispatch(disconnectOrders())
  }

  useEffect(() => {
    dispatch(connectOrders(ordersServerUrl));
    return disconnect;
  }, [dispatch]);

  const orders = useAppSelector(selectOrders);
  const ingredients: IIngredient[] = useAppSelector(selectIngridients);

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
        <div className={styles.FeedId__wrapper}>
          <h1 className={`${styles.FeedId__header} text text_type_main-medium`}>#{order.number}</h1>
          <FeedIdDetailsContent order={order} showOrderNumber={false} />
        </div>
    );
  } else {
    return null;
  }
};

export default FeedId;