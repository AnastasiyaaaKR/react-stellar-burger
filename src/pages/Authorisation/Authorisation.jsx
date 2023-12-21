import React from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Authorisation.module.css";

const Authorisation = () => {
  const [password, setPassword] = React.useState("password");
  const onChange = (e) => {
    setPassword(e.target.password);
  };

  return (
    <div className={styles.Authorisation__wrapper}>
      <h1
        className={`${styles.Authorisation__header} text text_type_main-medium mb-6`}
      >
        Вход
      </h1>
      <EmailInput placeholder="E-mail" extraClass="mb-6" />
      <PasswordInput
        onChange={onChange}
        value={password}
        name={"password"}
        extraClass="mb-6"
      />
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <div className={`${styles.Authorisation__textWrapper} mt-20`}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Вы — новый пользователь?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.Authorisation__buttonWrapper}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className={`${styles.Authorisation__textWrapper} mt-4`}>
        <p className="text text_type_main-default text_color_inactive pr-2">
          Забыли пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.Authorisation__buttonWrapper}
        >
          Восстановить пароль
        </Button>
      </div>
    </div>
  );
};

export default Authorisation;
