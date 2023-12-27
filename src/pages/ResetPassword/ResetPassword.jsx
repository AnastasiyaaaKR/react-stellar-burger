import React from "react";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import {
  setToken,
  setPassword,
  changePassword,
  selectPassword,
  selectToken,
} from "../../services/resetPasswordSlice";
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const password = useSelector(selectPassword);
  const token = useSelector(selectToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token && password) {
      dispatch(changePassword({token, password}))
        .unwrap()
    }
  };

  const onChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const onChangeToken = (e) => {
    dispatch(setToken(e.target.value));
  };

  return (
    <div className={`${styles.ResetPassword__wrapper}`}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <PasswordInput
            name={"password"}
            placeholder="Введите новый пароль"
            extraClass="mb-6"
            onChange={onChangePassword}
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            onChange={onChangeToken}
          />
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={!password || !token}
          >
            Восстановить
          </Button>
        </form>
        <div className={styles.ResetPassword__textWrapper}>
          <p className="text text_type_main-default text_color_inactive pr-2">
            Вспомнили пароль?
          </p>
          <Link to="/">
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass={styles.ResetPassword__buttonWrapper}
            >
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
