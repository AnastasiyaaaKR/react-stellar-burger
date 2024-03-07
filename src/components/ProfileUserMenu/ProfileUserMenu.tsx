import React from "react";
import styles from "./ProfileUserMenu.module.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../services/userSlice";
import { useAppDispatch } from "../../services/storage";

const ProfileUserMenu = () => {
  const dispatch = useAppDispatch();

  const logoutUser: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      dispatch(logout(refreshToken));
    }
  };

  return (
    <div className={`${styles.ProfileUserMenu__wrapper} mr-15`}>
      <NavLink
        to="/profile"
        className={`text text_type_main-medium ${styles.ProfileUserMenu__link}`}
      >
        Профиль
      </NavLink>

      <NavLink
        to="/profile/orders"
        className={`text text_type_main-medium ${styles.ProfileUserMenu__link}`}
      >
        История заказов
      </NavLink>
      <button
        className={`text text_type_main-medium ${styles.ProfileUserMenu__button}`}
        onClick={logoutUser}
      >
        Выход
      </button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};

export default ProfileUserMenu;
