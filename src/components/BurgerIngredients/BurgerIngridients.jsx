import React from "react";
import styles from './BurgerIngridients.module.css'

const BurgerIngridients = () => {
  return (
    <div>
    <h1>Соберите бургер</h1>
    <nav className={styles.navigation}>
      <div>
        <p>Булки</p>
      </div>
      <div>
        <p>Соусы</p>
      </div>
      <div>
        <p>Начинки</p>
      </div>
    </nav>
    <div>
      <p>Булки</p>
    </div>
    <div>
      <p>Соусы</p>
    </div>
    </div>
  )
}

export default BurgerIngridients