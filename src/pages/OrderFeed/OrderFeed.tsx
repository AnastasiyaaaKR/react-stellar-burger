import React from "react";
import styles from "./OrderFeed.module.css";
import ingredient from "../../images/ingredient.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderFeed = () => {
  return (
    <div className={styles.OrderFeed__wrapper}>
      <div className={`${styles.orders__wrapper} custom-scroll`}>
        <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
        <div>
          <div className="mb-4">
            <div className={styles.order__wrapper}>
              <div className={`${styles.order__header} pt-6`}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">
                  Сегодня, 16:20
                </p>
              </div>
              <p className="text text_type_main-medium mt-6">
                Death Star Starship Main бургер
              </p>
              <div className="mt-6 mb-6">
                <div className={styles.cost__wrapper}>
                  <div>
                    <img src={ingredient}></img>
                    <img src={ingredient}></img>
                  </div>
                  <div className={styles.cost__wrapper}>
                    <p className="text text_type_digits-default">480</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className={styles.order__wrapper}>
              <div className={`${styles.order__header} pt-6`}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">
                  Сегодня, 16:20
                </p>
              </div>
              <p className="text text_type_main-medium mt-6">
                Death Star Starship Main бургер
              </p>
              <div className="mt-6 mb-6">
                <div className={styles.cost__wrapper}>
                  <div>
                    <img src={ingredient}></img>
                    <img src={ingredient}></img>
                  </div>
                  <div className={styles.cost__wrapper}>
                    <p className="text text_type_digits-default">480</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className={styles.order__wrapper}>
              <div className={`${styles.order__header} pt-6`}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">
                  Сегодня, 16:20
                </p>
              </div>
              <p className="text text_type_main-medium mt-6">
                Death Star Starship Main бургер
              </p>
              <div className="mt-6 mb-6">
                <div className={styles.cost__wrapper}>
                  <div>
                    <img src={ingredient}></img>
                    <img src={ingredient}></img>
                  </div>
                  <div className={styles.cost__wrapper}>
                    <p className="text text_type_digits-default">480</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info__wrapper}>
        <div className={`${styles.informationBoard} mb-15`}>
          <div className={styles.informationBoard__status}>
            <p className="text text_type_main-medium mb-6">Готовы:</p>
            <ul
              className={`${styles.informationBoard__left} text text_type_digits-default mr-9`}
            >
              <li className={styles.informationBoard__text__inner}>034533</li>
              <li className={styles.informationBoard__text__inner}>034533</li>
              <li className={styles.informationBoard__text__inner}>034533</li>
              <li className={styles.informationBoard__text__inner}>034533</li>
              <li className={styles.informationBoard__text__inner}>034533</li>
            </ul>
          </div>
          <div className={styles.informationBoard__status}>
            <p className="text text_type_main-medium mb-6">В работе:</p>
            <ul
              className={`${styles.informationBoard__text} text text_type_digits-default`}
            >
              <li className={styles.informationBoard__text__inner}>034538</li>
              <li className={styles.informationBoard__text__inner}>034538</li>
              <li className={styles.informationBoard__text__inner}>034538</li>
              <li className={styles.informationBoard__text__inner}>034538</li>
            </ul>
          </div>
        </div>
        <div className="mb-15">
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <div className={styles.text__number}>
          <p className="text text_type_digits-large">28 752</p>
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <div className={styles.text__number}>
            <p className="text text_type_digits-large">138</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFeed;
