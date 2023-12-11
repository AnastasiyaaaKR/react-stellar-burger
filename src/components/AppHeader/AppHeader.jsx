import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={`${styles.header} mb-10`}>
      <nav className={styles.header__navigation}>
        <div className={styles.link__wrapper}>
          <a href="#" className={`${styles.icon__wrapper} mt-4 mb-4 ml-2`}>
            <div className={`${styles.icon} ml-5 mr-2`}>
              <BurgerIcon type="primary" />
            </div>
            <p
              className={`${styles.link_active} text text_type_main-default pr-5`}
            >
              Конструктор
            </p>
          </a>
          <a href="#" className={`${styles.icon__wrapper} mt-4 mb-4`}>
            <div className={`${styles.icon} ml-5 mr-2`}>
              <ListIcon type="secondary" />
            </div>
            <p className="text text_type_main-default text_color_inactive pr-5">
              Лента заказов
            </p>
          </a>
        </div>
        <Logo />
        <a href="#" className={`${styles.icon__wrapper} mt-4 mb-4`}>
          <div className={`${styles.icon} ml-5 mr-2`}>
            <ProfileIcon type="secondary" />
          </div>
          <p className="text text_type_main-default text_color_inactive pr-5">
            Личный кабинет
          </p>
        </a>
      </nav>
    </header>
  );
};

export default AppHeader;
