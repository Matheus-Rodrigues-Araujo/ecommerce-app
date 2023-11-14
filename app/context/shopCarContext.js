import React, { createContext, useReducer } from 'react';

const actions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case actions.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const initialState = { items: [] };
  const [products, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CarrinhoContext.Provider value={{ products, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
