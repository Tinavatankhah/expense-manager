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
      if (action.payload.amount != 0 && action.payload.description)
        state.transactions.push({ ...action.payload });
      else if (action.payload.amount == 0) alert("enter a valid number");
      state.balance += action.payload.amount;
      if (action.payload.amount > 0) {
        state.income += action.payload.amount;
      } else {
        state.expense += action.payload.amount;
      }
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      const item = state.transactions.find((i) => i.id == action.payload);
      if (item != undefined) {
        state.balance -= item.amount;
        if (item.amount > 0) {
          state.income -= item.amount;
        } else {
          state.expense -= item.amount;
        }
      }
      state.transactions = state.transactions.filter(
        (t) => t.id != action.payload,
      );
    },
    emptyList: (state) => {
      state.transactions = [];
    },
    editItem: (
      state,
      action: PayloadAction<{
        id: string;
        newInfo: { description: string; amount: number };
      }>,
    ) => {
      const { id, newInfo } = action.payload;
      const item = state.transactions.find((i) => i.id == id);
      if (item) {
        state.balance = state.balance - item.amount + newInfo.amount;
        if (item.amount > 0) {
          state.income -= item.amount;
        } else {
          state.expense -= item.amount;
        }
        if (newInfo.amount > 0) {
          state.income += newInfo.amount;
        } else {
          state.expense += newInfo.amount;
        }
        item.amount = newInfo.amount;
        item.description = newInfo.description;
      }
    },
  },
});
