import { IIngredient } from "../../types";
import {
  TinitialState,
  initialState,
  addNewIngridient,
  cleanBurgerIngridients,
  constructorIngridientSlice,
  setConstructorIngridients,
  setBun,
  changeIngridients,
  removeIngridient,
} from "./constructorIngridientSlice";

describe("Тест constructorIngridients reducer", () => {
  it("Тест setConstructorIngridients", () => {
    const ingridients: IIngredient[] = [
      {
        _id: "60666c42cc7b410027a1a9b7",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0,
      },
    ];
    const action = setConstructorIngridients(ingridients);
    const resultState = constructorIngridientSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      bun: null,
      ingridients: [
        {
          _id: "60666c42cc7b410027a1a9b7",
          name: "Соус Spicy-X",
          type: "sauce",
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: "https://code.s3.yandex.net/react/code/sauce-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-02-large.png",
          __v: 0,
        },
      ],
    });
  });

  it("Тест addNewIngridient", () => {
    const ingridient: IIngredient = {
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
    const action = addNewIngridient(ingridient);
    const resultState = constructorIngridientSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      bun: null,
      ingridients: [
        {
          _id: "60666c42cc7b410027a1a9b7",
          name: "Соус Spicy-X",
          type: "sauce",
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: "https://code.s3.yandex.net/react/code/sauce-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-02-large.png",
          __v: 0,
        },
      ],
    });
  });

  it("тест cleanBurgerIngridients", () => {
    const initState: TinitialState = {
      bun: {
        _id: "60666c42cc7b410027a1a9b2",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      ingridients: [
        {
          _id: "60666c42cc7b410027a1a9b7",
          name: "Соус Spicy-X",
          type: "sauce",
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: "https://code.s3.yandex.net/react/code/sauce-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-02-large.png",
          __v: 0,
        },
      ],
    };
    const action = cleanBurgerIngridients();
    const resultState = constructorIngridientSlice.reducer(initState, action);
    expect(resultState).toEqual({
      bun: null,
      ingridients: [],
    });
  });

  it("тест setBun", () => {
    const bun = {
      _id: "123",
      name: "Какая-то булка",
      type: "bun",
      price: 100,
      image: "image",
      image_mobile: "image_mobile",
      image_large: "image_large",
      proteins: 100,
      fat: 100,
      carbohydrates: 100,
      calories: 100,
      __v: 100,
    };
    const ingridients = [];
    const action = setBun(bun);
    const resultState = constructorIngridientSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      bun: {
        _id: "123",
        name: "Какая-то булка",
        type: "bun",
        price: 100,
        image: "image",
        image_mobile: "image_mobile",
        image_large: "image_large",
        proteins: 100,
        fat: 100,
        carbohydrates: 100,
        calories: 100,
        __v: 100,
      },
      ingridients: [],
    });
  });
});
