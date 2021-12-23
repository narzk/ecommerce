import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  basket: number;
}

const initialState: CounterState = {
  value: 0,
  basket: 0,
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
  },
});

export const { increment, decrement, incrementByAmount, addToBasket } =
  counterSlice.actions;

export default counterSlice.reducer;
