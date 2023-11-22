import React from "react";
import IngridientsHeader from "../../IngridientsHeader/IngridientsHeader";
import Ingridients from "../Ingridients/Ingridients";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngridients = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div>
      <IngridientsHeader/>
      <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div >
      <Ingridients />
    </div>
  )
}

export default BurgerIngridients