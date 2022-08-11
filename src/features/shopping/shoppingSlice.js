import { createSlice } from "@reduxjs/toolkit";

var guardado = localStorage.getItem("datos");
var shoppOld = JSON.parse(guardado);
var initialState;
if (shoppOld) {
  initialState = shoppOld;
} else {
  initialState = [];
}

export const shoppingSlice = createSlice({
  name: "shoppings",
  initialState,
  reducers: {
    addShopp: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("datos", JSON.stringify(state));
    },
    deletShopp: (state, action) => {
      const shoppFind = state.find(
        (shopping) => shopping.id === action.payload
      );
      if (shoppFind) {
        state.splice(state.indexOf(shoppFind), 1);
        localStorage.setItem("datos", JSON.stringify(state));
      }
    },
    updateShopp: (state, action) => {
      const { id, amount } = action.payload;
      const foundShopp = state.find((shopp) => shopp.id === id);
      if (foundShopp) {
        foundShopp.amount = amount;
        localStorage.setItem("datos", JSON.stringify(state));
      }
    },
    deleteAll: (state, action) => {
      state = [];
      localStorage.setItem("datos", JSON.stringify(state));
    },
  },
});
export const { addShopp, deletShopp, updateShopp, deleteAll } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
