import { IIngredient } from "../types";

const baseUrl = "https://norma.nomoreparties.space/api";
const domenUrl = `${baseUrl}/ingredients`;
const createOrderUrl = `${baseUrl}/orders`;
const domenForgotPassword = `${baseUrl}/password-reset`;
const domenResetPassword = `${baseUrl}/password-reset/reset`;
const authUrl = "https://norma.nomoreparties.space/api/auth/";
const registerUrl = `${authUrl}register`;
const loginUrl = `${authUrl}login`;
const tokenUrl = `${authUrl}token`;
const logoutUrl = `${authUrl}logout`;
const UserDataUrl = `${authUrl}user`;

function getResponseData(res: Response): Promise<any> {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const getIngridients = (): Promise<{
  data: IIngredient[];
  success: boolean;
}> => {
  return fetch(domenUrl).then(getResponseData);
};

export const createOrder = (
  ingredients: string[]
): Promise<{
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}> => {
  return fetch(createOrderUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients,
    }),
  }).then(getResponseData);
};

export const forgotPassword = (
  email: string
): Promise<{
  success: boolean;
  message: string;
}> => {
  return fetch(domenForgotPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(getResponseData);
};

export const resetPassword = (
  token: string,
  password: string
): Promise<{
  success: boolean;
  message: string;
}> => {
  return fetch(domenResetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  }).then(getResponseData);
};

export const registration = (
  email: string,
  password: string,
  name: string
): Promise<{
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}> => {
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then(getResponseData);
};

export const login = (
  email: string,
  password: string
): Promise<{
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
}> => {
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};

export const refreshAccessToken = (
  refreshToken: string
): Promise<{
  success: boolean;
  accessToken: string;
  refreshToken: string;
}> => {
  return fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(getResponseData);
};

export const logout = (
  refreshToken: string
): Promise<{
  success: boolean;
  message: string;
}> => {
  return fetch(logoutUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(getResponseData);
};

export const getUser = (): Promise<{
  success: boolean;
  user: {
    email: string;
    name: string;
  };
}> => {
  const accessToken = localStorage.getItem("accessToken");
  return fetch(UserDataUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken ? accessToken : '',
    },
  }).then(getResponseData);
};

export const updateUser = (
  name: string,
  email: string,
  password?: string
): Promise<{
  success: boolean;
  user: {
    email: string;
    name: string;
  };
}> => {
  const accessToken = localStorage.getItem("accessToken");
  return fetch(UserDataUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
       authorization: accessToken ? accessToken : '',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};
