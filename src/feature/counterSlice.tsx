import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imageTwo from "../assets/image-product-1.jpg";

export interface CounterState {
  value: number;
  basket: number;
  image: string;
}

const initialState: CounterState = {
  value: 0,
  basket: 0,
  image: imageTwo,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addToBasket: (state) => {
      state.basket = state.value;
    },
    deleteBasket: (state) => {
      state.basket = 0;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addToBasket,
  setImage,
  deleteBasket,
} = counterSlice.actions;

export default counterSlice.reducer;
