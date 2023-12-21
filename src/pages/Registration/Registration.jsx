import React from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Registration.module.css'

const Registration = () => {
  return (
    <div className={styles.Registration__wrapper}>
      <h1 className={`${styles.Registration__header} text text_type_main-medium mb-6`}>Регистрация</h1>
      <div>
        <Input type={"text"} placeholder={"Имя"} extraClass="mb-6"/>
        <EmailInput placeholder="E-mail" extraClass="mb-6"/>
        <PasswordInput name={"password"} extraClass="mb-6"/>
      </div>
      <Button htmlType="button" type="primary" size="medium" extraClass="mb-20">
        Зарегистрироваться
      </Button>
      <div className={styles.Registration__textWrapper}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Уже зарегистрированы?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.Registration__buttonWrapper}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Registration;
