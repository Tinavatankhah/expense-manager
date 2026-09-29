import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
};
export type Management = {
  transactions: Array<Transaction>;
  balance: number;
  income: number;
  expense: number;
};
const initialState: Management = {
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
};
export const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push({ ...action.payload });
      state.balance += action.payload.amount;
      if (action.payload.amount > 0) {
        state.income += action.payload.amount;
      } else {
        state.expense += action.payload.amount;
      }
      console.log(state.transactions)
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (t) => t.id != action.payload,
      );
    },
    emptyList: (state) => {
      state.transactions = [];
    },
  },

});
