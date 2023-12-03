import React from "react"
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Bun from '../../images/done.png'
import styles from "./BurgerConstructor.module.css";


const BurgerConstructor = ({ingredients, showModal}) => {
  const burger = {
    bun: { name: 'Краторная булка N-200i (верх)', icon: Bun, price: 20 },
    ingredients:[

    ]
  }
  
  return (
     <div className={`text text_type_main-small ${styles.burger__wrapper}`}>
        <div className='ml-8'>
          <ConstructorElement
          extraClass={styles.ConstructorElement}
          type="top"
          isLocked={true}
          text={burger.bun.name}
          price={burger.bun.price}
          thumbnail={burger.bun.icon}
        />
        </div>
        <div className={`${styles.ingridients__wrapper} custom-scroll`}>
          {
            ingredients &&
            ingredients.map((ingredient)=>(
              <div className={styles.ConstructorElement__wrapper} key={ingredient._id}>
                <div className={styles.icon__wrapper}>
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  extraClass={styles.ConstructorElement}
                  key={ingredient._id}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                /> 
              </div>
            ))
          }
        </div>
        <div className='ml-8'>
          <ConstructorElement
            extraClass={styles.ConstructorElement}
            type="bottom"
            isLocked={true}
            text={burger.bun.name}
            price={burger.bun.price}
            thumbnail={burger.bun.icon}
          />
        </div>
        <div className={styles.order__wrapper}>
          <p className={`${styles.ingridient__costText}text text_type_digits-default`}>610</p>
          <div className={`mr-10${styles.icon__wrapper}`}>
            <CurrencyIcon type="primary" className='mr-10'/>
          </div>
          <div className="ml-10">
            <Button htmlType="button" type="primary" size="medium" onClick={showModal}>
            Оформить заказ
          </Button>
          </div>
        </div>
      </div>
    )
}

export default BurgerConstructor