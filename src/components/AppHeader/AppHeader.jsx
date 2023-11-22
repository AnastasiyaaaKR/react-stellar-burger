import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles.header} mb-10`}>
      <nav className={styles.header__navigation}>
        <a href='#' className={`${styles.icon__wrapper} mt-4 mb-4`}>
          <div className={`${styles.icon} ml-5 mr-2`}>
            <BurgerIcon type="primary"/>
          </div>
        <p className="text text_type_main-small">Конструктор</p>
      </a>
      <a href='#' className={`${styles.icon__wrapper} mt-4 mb-4`}>
        <div className={`${styles.icon} ml-5 mr-2`}>
          <ListIcon type="secondary"/>
        </div>
        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
      </a>
      <Logo />
      <a href='#' className={`${styles.icon__wrapper} mt-4 mb-4`}>
        <div className={`${styles.icon} ml-5 mr-2`}>
          <ProfileIcon type="secondary"/>
        </div>
        <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </a>
      </nav>
    </header>
  )
}

export default AppHeader