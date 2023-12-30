import React from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Authorisation.module.css";
import { Link } from "react-router-dom";
import {
  setEmail,
  setPassword,
  loginUser,
  selectEmail,
  selectPassword,
} from "../../services/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Authorisation = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const onChangeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const onChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        });
    }
  };

  return (
    <div className={styles.Authorisation__wrapper}>
      <h1
        className={`${styles.Authorisation__header} text text_type_main-medium mb-6`}
      >
        Вход
      </h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          placeholder="E-mail"
          extraClass="mb-6"
          onChange={onChangeEmail}
          name="email"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name="password"
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className={`${styles.Authorisation__textWrapper} mt-20`}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Вы — новый пользователь?
        </p>
        <Link to="/register">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.Authorisation__buttonWrapper}
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={`${styles.Authorisation__textWrapper} mt-4`}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Забыли пароль?
        </p>
        <Link to="/forgot-password">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.Authorisation__buttonWrapper}
          >
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Authorisation;
