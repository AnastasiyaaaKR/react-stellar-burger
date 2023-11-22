import React from "react";
import styles from './sauces.module.css'
import Sauce1 from "../../images/sauce1.png";
import Sauce2 from "../../images/sauce2.png";
import Sauce3 from "../../images/sauce3.png";
import Sauce4 from "../../images/sauce3.png";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Sauces = () => {
  return (
    <div className={`${styles.ingridient__section} pl-4`}>
      <p className="text text_type_main-medium">Cоусы</p>
      <div className={`${styles.ingridient__wrapper} mb-10`}>
        <div className={`${styles.ingridient} mr-6 mb-8 mt-6`}>
          <img src={Sauce1} alt="Соус Spicy-X" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div className={styles.ingridient__cost}>
            <p className={`${styles.ingridient__costText}text text_type_digits-default`}>30</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`${styles.ingridient__text} text text_type_main-small`}>Соус Spicy-X</p>
        </div>
        <div className={`${styles.ingridient} mr-6 mb-8 mt-6`}>
          <img src={Sauce2} alt="Соус фирменный Space Sauce" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div>
            <div className={styles.ingridient__cost}>
              <p className={`${styles.ingridient__costText}text text_type_digits-default`}>30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.ingridient__text} text text_type_main-small`}>Соус фирменный Space Sauce</p>
          </div>
        </div>
        <div className={`${styles.ingridient} mr-6 mb-8 mt-6`}>
          <img src={Sauce3} alt="Соус традиционный галактический" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div>
            <div className={styles.ingridient__cost}>
              <p className={`${styles.ingridient__costText}text text_type_digits-default`}>30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.ingridient__text} text text_type_main-small`}>Соус традиционный галактический</p>
          </div>
        </div>
        <div className={`${styles.ingridient} mr-6 mb-8 mt-6`}>
          <img src={Sauce4} alt="Соус с шипами Антарианского плоскоходца" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div>
            <div className={styles.ingridient__cost}>
              <p className={`${styles.ingridient__costText}text text_type_digits-default`}>30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.ingridient__text} text text_type_main-small`}>Соус с шипами Антарианского плоскоходца</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sauces