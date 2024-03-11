import {
  setModalIngredient,
  deleteModalIngridient,
  modalIngridientSlice,
  TinitialState,
} from "./modalIngridientSlice";
import { IIngredient } from "../../types";

const initStore: TinitialState = {
  value: null,
};

describe("Тест modalIngridientSlice reducer", () => {
  it("Тест setModalIngredient", () => {
    const value = {
      _id: "60666c42cc7b410027a1a9b7",
      name: "Соус Spicy-X",
      type: "sauce",
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: "https://code.s3.yandex.net/react/code/sauce-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      __v: 0,
    };
    const action = setModalIngredient(value);
    const resultState = modalIngridientSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      value : {
      _id: "60666c42cc7b410027a1a9b7",
      name: "Соус Spicy-X",
      type: "sauce",
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: "https://code.s3.yandex.net/react/code/sauce-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      __v: 0,
    }
    });
  });

  it("Тест deleteModalIngridient", () => {
    const value = {
      _id: "60666c42cc7b410027a1a9b7",
      name: "Соус Spicy-X",
      type: "sauce",
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: "https://code.s3.yandex.net/react/code/sauce-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      __v: 0,
    };
    const action = deleteModalIngridient();
    const resultState = modalIngridientSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      value: null,
    });
  });
});
