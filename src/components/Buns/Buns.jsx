import React from "react";
import styles from './Buns.module.css';
import bun1 from "../../images/bun1.png";
import bun2 from "../../images/bun2.png";
import { CurrencyIcon,Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Buns () {
  return (
    <div className={`${styles.ingridient__section} pl-4`}>
      <p className="text text_type_main-medium mt-10">Булки</p>
      <div className={`${styles.ingridient__wrapper} mb-10`}>
        <div className={`${styles.ingridient} mr-6 mb-10 mt-6`}>
          <img src={bun1} alt="Краторная булка" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div className={styles.ingridient__cost}>
            <p className={`${styles.ingridient__costText}text text_type_digits-default`}>20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`${styles.ingridient__text} text text_type_main-small`}>Краторная булка N-200i</p>
        </div>
        <div className={`${styles.ingridient} mr-6 mb-10 mt-6`}>
          <img src={bun2} alt="Флюоресцентная булка" />
          <Counter count={1} size="default" extraClass="m-1" />
          <div>
            <div className={styles.ingridient__cost}>
              <p className={`${styles.ingridient__costText}text text_type_digits-default`}>20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.ingridient__text} text text_type_main-small`}>Флюоресцентная булка R2-D3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buns