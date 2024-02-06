import storage from "./src/services/storage";

export interface IIngredient {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  _constId?: string,
};

export interface ILoginUser {
  email: string, 
  password: string,
}

export interface IUser {
  name: string,
  email: string, 
  password?: string,
}

export interface IOrder {
  ingredients: string[],
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
}

export type AppDispatch = typeof storage.dispatch;

export type RootState = ReturnType<typeof storage.getState>