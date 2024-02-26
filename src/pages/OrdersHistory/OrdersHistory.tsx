import React, { useEffect } from "react";
import ProfileUserMenu from "../../components/ProfileUserMenu/ProfileUserMenu";
import styles from "./OrdersHistury.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../../types";
import { selectOrders} from "../../services/orders/reducer";
import {
  selectIngridients,
  fetchIngridients,
} from "../../services/IngredientsSlice";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../services/orders/actions";
import Orders from "../../components/Orders/Orders";

const accessToken = localStorage.getItem("accessToken")?.replace('Bearer ','');
const ordersServerUrl = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;


const OrdersHistory = () => {

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

  return (
    <div className={styles.OrdersHistory__wrapper}>
      <ProfileUserMenu />
      <Orders orders={orders} ingredients={ingredients} pathToOrder={'/profile/orders/'}/>
    </div>
  );
};

export default OrdersHistory;
