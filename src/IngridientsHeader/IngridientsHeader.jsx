import React from "react";
import styles from './IngridientsHeader.module.css'

const IngridientsHeader = () => {
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
    </div>
  )
}

export default IngridientsHeader