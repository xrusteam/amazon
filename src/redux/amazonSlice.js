import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      if (
        state.products.some(
          (item) => item.id === id
        )
      ) {
        state.products = state.products.map(
          (product) =>
            product.id === id
              ? {
                  ...product,
                  quantity:
                    (product.quantity += 1),
                }
              : { ...product }
        );
      } else {
        state.products = [
          ...state.products,
          action.payload,
        ];
      }
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    incQuantity: (state, action) => {
      state.products = state.products.map(
        (product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: (product.quantity += 1),
              }
            : { ...product }
      );
    },
    decQuantity: (state, action) => {
      state.products = state.products.map(
        (product) => {
          return product.id === action.payload
            ? {
                ...product,
                quantity:
                  product.quantity === 1
                    ? 1
                    : (product.quantity -= 1),
              }
            : { ...product };
        }
      );
    },
    removeAllElements: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  removeAllElements,
  incQuantity,
  decQuantity,
} = amazonSlice.actions;
export default amazonSlice.reducer;
