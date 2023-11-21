import React from "react";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ApiHeader.module.css';

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon__wrapper}>
        <BurgerIcon type="primary" />
        <p className="text text_type_main-small">Конструктор</p>
      </div>
      <div className={styles.icon__wrapper}>
        <ListIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
      </div>
      <Logo />
      <div className={styles.icon__wrapper}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </div>
    </div>
  )
}

export default AppHeader