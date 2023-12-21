import React from "react";
import styles from "./ProfileUser.module.css";
import {
  EmailInput,
  Input,
  Tab,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileUser = () => {
  const [current, setCurrent] = React.useState("profile");

  const [name, setName] = React.useState("Анастсия");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const [email, setEmail] = React.useState("bob@example.com");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("password");
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.ProfileUser__wrapper}>
      <div className={`${styles.ProfileUser__Tab_wrapper} mr-15`}>
        <Tab
          value="profile"
          active={current === "profile"}
          onClick={setCurrent}
        >
          Профиль
        </Tab>
        <Tab
          value="ordersHistory"
          active={current === "ordersHistory"}
          onClick={setCurrent}
        >
          История заказов
        </Tab>
        <Tab value="LogOut" active={current === "LogOut"} onClick={setCurrent}>
          Выход
        </Tab>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div>
        <Input
          type={"text"}
          placeholder={"placeholder"}
          onChange={(e) => setName(e.target.value)}
          icon="EditIcon"
          value={name}
          name={"name"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <div className={styles.email__wparrer}>
          <EmailInput
            onChange={changeEmail}
            value={email}
            name={"email"}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
        </div>
        <div>
          <PasswordInput
          onChange={changePassword}
          value={password}
          name={"password"}
          icon="EditIcon"
        />
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
