import React from "react";
import styles from "./ProfileUser.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  setProfileEmail,
  setProfileName,
  setProfilePassword,
  resetData,
  getUser,
  updateUser,
  selectprofileUserEmail,
  selectprofileUserName,
  selectprofileUserPassword,
  selectChanged,
} from "../../services/userSlice";
import ProfileUserMenu from "../../components/ProfileUserMenu/ProfileUserMenu";
import { useAppDispatch, useAppSelector } from "../../services/storage";

const ProfileUser = () => {
  const dispatch = useAppDispatch();

  const name: string = useAppSelector(selectprofileUserName);
  const email: string = useAppSelector(selectprofileUserEmail);
  const password: string = useAppSelector(selectprofileUserPassword);
  const changed = useAppSelector(selectChanged);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name && email) {
      dispatch(updateUser({ name, email, password }));
    }
  };

  const resetUser: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(resetData());
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setProfileEmail(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setProfilePassword(e.target.value));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setProfileName(e.target.value));
  };

  return (
    <div className={styles.ProfileUser}>
      <ProfileUserMenu/>
      <div className={styles.ProfileUser__wrapper}>
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
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
