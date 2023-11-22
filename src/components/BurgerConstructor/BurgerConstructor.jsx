import React from "react"
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import Sauce from '../../images/sauce3.png'
import Bun from '../../images/bun1.png'
import Meat from '../../images/meat.png'
import Fruit from '../../images/sp.png'
import Rings from '../../images/mineral rings.png'
import styles from "./BurgerConstructor.module.css";

const BurgerConstructor = () => {
  const burger = {
    bun: { name: 'Краторная булка N-200i (верх)', icon: Bun, price: 20 },
    ingredients:[
      { id: 1, name: 'Соус традиционный галактический', icon: Sauce, price: 30 },
      { id: 2, name: 'Мясо бессмертных моллюсков Protostomia', icon: Meat, price: 300 },
      { id: 3, name: 'Плоды Фалленианского дерева', icon: Fruit, price: 80 },
      { id: 4, name: 'Хрустящие минеральные кольца', icon: Rings, price: 80 },
      { id: 5, name: 'Хрустящие минеральные кольца', icon: Rings, price: 80 },
    ]
  }

  return (
     <div className={`text text_type_main-small ${styles.burger__wrapper}`}>
      <ConstructorElement 
        type="top"
        isLocked={true}
        text={burger.bun.name}
        price={burger.bun.price}
        thumbnail={burger.bun.icon}
      />

      {burger.ingredients.map((ingredient)=>(
      <ConstructorElement
        key={ingredient.id}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.icon}
      /> 
      ))}
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={burger.bun.name}
        price={burger.bun.price}
        thumbnail={burger.bun.icon}
      />
    </div>
  )
}

export default BurgerConstructor