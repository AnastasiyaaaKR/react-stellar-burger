import React from "react";
import styles from './IngridientsHeader.module.css'

const IngridientsHeader = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div>
      <h1 className={`${styles.ingridients__header}text text_type_main-large`}>Соберите бургер</h1>
    </div>
  )
}


export default IngridientsHeader