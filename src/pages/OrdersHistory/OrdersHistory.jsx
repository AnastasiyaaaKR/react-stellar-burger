import React from "react";
import ProfileUserMenu from "../../components/ProfileUserMenu/ProfileUserMenu";
import styles from "./OrdersHistury.module.css";

const OrdersHistory = () => {
  return (
    <div className={styles.OrdersHistory__wrapper}>
      <ProfileUserMenu />
      <ul className={styles.OrdersHistory__list}>
        <li className={styles.item}>
          <div className={styles.item__header}>
            <p className="text text_type_digits-default">#034535</p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 16:20
            </p>
          </div>
          <p className="text text_type_main-medium mt-6">
            Death Star Starship Main бургер
          </p>
          <p className="text text_type_main-small mt-2">Готов</p>
          <div className={`${styles.icons__wrapper} mt-6 mb-6`}>
            <div>
              <img></img>
              <img></img>
            </div>
            <div className="ml-6">
              <p className="text text_type_digits-default">480</p>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default OrdersHistory;
