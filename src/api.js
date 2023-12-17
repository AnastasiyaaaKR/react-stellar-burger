const baseUrl = "https://norma.nomoreparties.space/api";
const domenUrl = `${baseUrl}/ingredients`;
const createOrderUrl = `${baseUrl}/orders`;

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
