import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IIngredient, IOrder } from "../../../types";
import styles from "./Orders.module.css";
import FeedIdDetailsModal from "../FeedIdDetailsModal/FeedIdDetailsModal";

interface IOrdersProps {
  orders: IOrder[];
  ingredients: IIngredient[];
  pathToOrder: string;
  selectedOrderId: string | null;
}

const Orders = ({ orders, ingredients, pathToOrder, selectedOrderId }: IOrdersProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const visible = Boolean(selectedOrderId);
  const order = orders.find((order) => order._id === selectedOrderId);

  const closeOrderDetails = (): void => {
    navigate(location);
  };

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

  function getImageToOtherIngredients(order: IOrder): string {
    const id = order.ingredients[5];
    const ingredient = getIngredientById(id);
    if (ingredient) {
      return ingredient.image;
    } else {
      return "";
    }
  }

  return (
    <div className={`${styles.orders__wrapper} mr-2 custom-scroll`}>
      {orders.map((order) => {
        return (
          <div className="mb-4" key={order._id}>
            <Link
              to={`${pathToOrder}${order._id}`}
              className={styles.order__link}
              state={{ background: location }}
            >
              <div className={styles.order__wrapper}>
                <div className={`${styles.order__header} pt-6`}>
                  <p className="text text_type_digits-default">
                    #{order.number}
                  </p>
                  <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(order.createdAt)} />
                  </p>
                </div>
                <p className="text text_type_main-medium mt-6">{order.name}</p>
                <div className="mt-6 mb-6">
                  <div className={styles.cost__wrapper}>
                    <div className={styles.images__wrapper}>
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
                                key={index}
                              />
                            );
                          }
                        })}
                      {order.ingredients.length > 5 && (
                        <div className={`text text_type_main-small ${styles.otherIngredients__wrapper}`}>
                          <p className={styles.otherIngredients}>
                            +{order.ingredients.length - 5}
                          </p>
                          <img
                            className={styles.ingridients__img}
                            src={getImageToOtherIngredients(order)}
                            alt={"other ingredients"}
                          />
                        </div>
                      )}
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
            </Link>
          </div>
        );
      })}
      {order && (
        <FeedIdDetailsModal
          order={order}
          closeModal={closeOrderDetails}
          visible={visible}
        />
      )}
    </div>
  );
};

export default Orders;
