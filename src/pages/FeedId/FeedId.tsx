import React from "react";
import styles from './FeedId.module.css';
import ingredient from "../../images/ingredient.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const FeedId = () => {
  return (
    <div className={styles.FeedId__wrapper}>
      <p className={`${styles.FeedId__number} text text_type_digits-default mb-10`}>#034533</p>
      <p className="text text_type_main-medium mb-3">Black Hole Singularity острый бургер</p>
      <p className={`${styles.FeedId__status} mb-15 text text_type_main-default`}>Выполнен</p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={`${styles.FeedId__list} mb-10`}>
        <li className={`${styles.FeedId__item} mb-4`}>
             <div className={styles.img__wrapper}>
            <img className={styles.FeedId__img} src={ingredient}></img>
            <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
            </div>
          <div className={styles.price__wrapper}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary"/>
          </div>
        </li>
        <li className={`${styles.FeedId__item} mb-4`}>
             <div className={styles.img__wrapper}>
            <img className={styles.FeedId__img} src={ingredient}></img>
            <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
            </div>
          <div className={styles.price__wrapper}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary"/>
          </div>
        </li>
        <li className={`${styles.FeedId__item} mb-4`}>
             <div className={styles.img__wrapper}>
            <img className={styles.FeedId__img} src={ingredient}></img>
            <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
            </div>
          <div className={styles.price__wrapper}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary"/>
          </div>
        </li>
        <li className={`${styles.FeedId__item} mb-4`}>
             <div className={styles.img__wrapper}>
            <img className={styles.FeedId__img} src={ingredient}></img>
            <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
            </div>
          <div className={styles.price__wrapper}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary"/>
          </div>
        </li>
      </ul>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default FeedId;
