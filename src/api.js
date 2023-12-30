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

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const getIngridients = () => {
  return fetch(domenUrl).then(getResponseData);
};

export const createOrder = (ingredients) => {
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

export const forgotPassword = (email) => {
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

export const resetPassword = (token, password) => {
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

export const registration = (email, password, name) => {
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

export const login = (email, password) => {
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

export const refreshAccessToken = (refreshToken) => {
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

export const logout = (refreshToken) => {
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

export const getUser = () => {
  return fetch(UserDataUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem('accessToken')
    },
  }).then(getResponseData);
};

export const updateUser = (name, email, password) => {
  return fetch(UserDataUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem('accessToken')
    },
    body: JSON.stringify({
      name: name, 
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};

