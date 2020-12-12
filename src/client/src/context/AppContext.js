import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  currentCategoryId: 0,
  categories: [
    { id: 0, name: "Math", sub: ["foo", "bar", "baz"] },
    { id: 1, name: "Chemistry", sub: ["foo", "bar", "baz"] },
    { id: 2, name: "Biology", sub: ["foo", "bar", "baz"] },
    { id: 3, name: "Physics", sub: ["foo", "bar", "baz"] },
  ],
};

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setCategory = (id) => {
    dispatch({ type: "SET_CATEGORY", payload: id });
  };

  const { currentCategoryId, categories } = state;
  return (
    <AppContext.Provider value={{ currentCategoryId, categories, setCategory }}>
      {children}
    </AppContext.Provider>
  );
};
