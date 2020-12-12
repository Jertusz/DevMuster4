import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  currentCategoryId: 0,
  selectedSubCategoriesIds: [],
  challenges: [],
  categories: [
    {
      id: 0,
      name: "Math",
      sub: [
        { id: 0, name: "Math1" },
        { id: 1, name: "Math2" },
        { id: 2, name: "Math3" },
      ],
    },
    {
      id: 1,
      name: "Chemistry",
      sub: [
        { id: 0, name: "Chemistry1" },
        { id: 1, name: "Chemistry2" },
        { id: 2, name: "Chemistry3" },
      ],
    },
    {
      id: 2,
      name: "Biology",
      sub: [
        { id: 0, name: "Biology1" },
        { id: 1, name: "Biology2" },
        { id: 2, name: "Biology3" },
      ],
    },
    {
      id: 3,
      name: "Physics",
      sub: [
        { id: 0, name: "Physics1" },
        { id: 1, name: "Physics2" },
        { id: 2, name: "Physics3" },
      ],
    },
  ],
};

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setCategory = (id) => {
    dispatch({ type: "SET_CATEGORY", payload: id });
  };

  const toggleSubCategory = (id) => {
    dispatch({ type: "TOGGLE_SUB_CATEGORY", payload: id });
  };

  const {
    currentCategoryId,
    categories,
    selectedSubCategoriesIds,
    challenges,
  } = state;
  return (
    <AppContext.Provider
      value={{
        currentCategoryId,
        categories,
        selectedSubCategoriesIds,
        challenges,
        setCategory,
        toggleSubCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
