import React, { useEffect } from "react";
import { Location } from "react-router-dom";
import ProfileUserMenu from "../../components/ProfileUserMenu/ProfileUserMenu";
import styles from "./OrdersHistury.module.css";
import { selectOrders } from "../../services/orders/reducer";
import { selectIngridients } from "../../services/IngredientsSlice";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import Orders from "../../components/Orders/Orders";
import { wsBaseUrl } from "../../api";
import { useAppDispatch, useAppSelector } from "../../services/storage";

const accessToken = localStorage.getItem("accessToken")?.replace("Bearer ", "");
const ordersServerUrl = `${wsBaseUrl}?token=${accessToken}`;

interface IOrdersHistoryProps {
  location: Location;
}

const getOrderId = (location: Location): string | null => {
  const { pathname } = location;
  const match = pathname.match(/\/profile\/orders\/(.+)/);
  if (!match) return null;

  return match[1];
};

const OrdersHistory = ({ location }: IOrdersHistoryProps) => {
  const dispatch = useAppDispatch();

  const disconnect = () => {
    dispatch(disconnectOrders());
  };

  useEffect(() => {
    dispatch(connectOrders(ordersServerUrl));
    return disconnect;
  }, [dispatch]);

  const ingredients = useAppSelector(selectIngridients);
  const orders = useAppSelector(selectOrders);

  return (
    <div className={styles.OrdersHistory__wrapper}>
      <ProfileUserMenu />
      <Orders
        orders={orders}
        ingredients={ingredients}
        pathToOrder={"/profile/orders/"}
        selectedOrderId={getOrderId(location)}
      />
    </div>
  );
};

export default OrdersHistory;
