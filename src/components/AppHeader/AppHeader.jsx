import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavLink, Outlet } from "react-router-dom";

const AppHeader = () => {
  return (
    <div>
      <header className={`${styles.header} mb-10`}>
        <nav className={styles.header__navigation}>
          <div className={styles.link__wrapper}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.icon__wrapper} mt-4 mb-4 ml-2 ${
                  isActive ? styles.linkActive : "text_color_inactive"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`${styles.icon} ml-5 mr-2`}>
                    <BurgerIcon type={isActive ? "primary" : "secondary"} />
                  </div>
                  <p className="text text_type_main-default">Конструктор</p>
                </>
              )}
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `${styles.icon__wrapper} mt-4 mb-4 ${
                  isActive ? styles.linkActive : "text_color_inactive"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`${styles.icon} ml-5 mr-2`}>
                    <ListIcon type={isActive ? "primary" : "secondary"} />
                  </div>
                  <p className="text text_type_main-default pr-5">
                    Лента заказов
                  </p>
                </>
              )}
            </NavLink>
          </div>
          <Logo />
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${styles.icon__wrapper} mt-4 mb-4 ${
                isActive ? styles.linkActive : "text_color_inactive"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`${styles.icon} ml-5 mr-2`}>
                  <ProfileIcon type={isActive ? "primary" : "secondary"} />
                </div>
                <p className="text text_type_main-default pr-5">
                  Личный кабинет
                </p>
              </>
            )}
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default AppHeader;
