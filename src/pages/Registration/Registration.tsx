import React from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import {
  setEmail,
  setPassword,
  setName,
  registerUser,
  selectEmail,
  selectPassword,
  selectName,
} from "../../services/registrationSlice";
import { useDispatch, useSelector } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();
  const email: string = useSelector(selectEmail);
  const password: string = useSelector(selectPassword);
  const name: string = useSelector(selectName);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEmail(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setPassword(e.target.value));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setName(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email && password && name) {
      dispatch(registerUser({ email, password, name }))
        .unwrap()
        .then((res) => {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
        });
    }
  };

  return (
    <div className={styles.Registration__wrapper}>
      <h1
        className={`${styles.Registration__header} text text_type_main-medium mb-6`}
      >
        Регистрация
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            value={name}
            type={"text"}
            placeholder={"Имя"}
            extraClass="mb-6"
            onChange={onChangeName}
          />
          <EmailInput
            value={email}
            type="email"
            placeholder="E-mail"
            extraClass="mb-6"
            onChange={onChangeEmail}
          />
          <PasswordInput
            type={"password"}
            name={"password"}
            extraClass="mb-6"
            onChange={onChangePassword}
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
          disabled={!password || !email || !name}
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.Registration__textWrapper}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Уже зарегистрированы?
        </p>
        <Link to="/login">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.Registration__buttonWrapper}
          >
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
