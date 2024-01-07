import React from "react";
import styles from "./ProfileUser.module.css";
import {
  EmailInput,
  Input,
  Tab,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  setName,
  setEmail,
  setPassword,
  resetData,
  getUser,
  updateUser,
  selectEmail,
  selectName,
  selectPassword,
  logout,
  selectChanged,
} from "../../services/userProfileSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileUser = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const changed = useSelector(selectChanged);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(updateUser({ name, email, password }));
    }
  };

  const resetUser = (e) => {
    e.preventDefault();
    dispatch(resetData());
  };

  const onChangeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const onChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const onChangeName = (e) => {
    dispatch(setName(e.target.value));
  };

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout(localStorage.getItem("refreshToken")));
  };

  return (
    <div className={styles.ProfileUser}>
      <div className={`${styles.ProfileUser__wrapper} mr-15`}>
        <Link
          className={`text text_type_main-medium ${styles.ProfileUser__link}`}
        >
          Профиль
        </Link>
        <Link
          className={`text text_type_main-medium ${styles.ProfileUser__link}`}
        >
          История заказов
        </Link>
        <button
          className={`text text_type_main-medium ${styles.ProfileUser__button}`}
          onClick={logoutUser}
        >
          Выход
        </button>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} onReset={resetUser}>
          <Input
            type="text"
            value={name}
            placeholder="Имя"
            icon="EditIcon"
            name="name"
            error={false}
            errorText="Ошибка"
            size="default"
            extraClass="mb-6"
            onChange={onChangeName}
          />
          <div className={styles.email__wparrer}>
            <EmailInput
              value={email}
              name="email"
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-6"
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <PasswordInput
              value={password}
              name={"password"}
              icon="EditIcon"
              extraClass="mb-6"
              onChange={onChangePassword}
            />
          </div>
          {changed && (
            <div className={styles.button__wrapper}>
              <Button htmlType="reset" type="secondary" size="medium">
                Отмена
              </Button>
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass="ml-2"
              >
                Сохранить
              </Button>
            </div>
          )
        }
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
