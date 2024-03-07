import React from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ForgotPassword.module.css";
import { fetchEmail, setEmail, selectEmail } from "../../services/forgotPasswordSlice";
import { useAppDispatch, useAppSelector } from "../../services/storage";

const ForgotPassword = () => {

  const dispatch = useAppDispatch();
  const email: string = useAppSelector(selectEmail);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(email) {
      dispatch(fetchEmail(email))
      .unwrap()
      .then(() => dispatch(setEmail('')))
    } 
  };


  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div className={`${styles.ForgotPassword__wrapper}`}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          name={"email"}
          placeholder="Укажите e-mail"
          extraClass="mb-6"
          onChange={onChange}
        />
        <Button
          type="primary"
          size="medium"
          extraClass="mb-20"
          htmlType="submit"
          disabled={!email}
        >
          Восстановить
        </Button>
        <div className={styles.ForgotPassword__textWrapper}>
          <p className="text text_type_main-default text_color_inactive pr-2">
            Вспомнили пароль?
          </p>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.ForgotPassword__buttonWrapper}

          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
