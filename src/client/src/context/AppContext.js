import axios from "axios";
import React, { createContext, useReducer } from "react";
import createHeader from "../utils/createHeader";
import AppReducer from "./AppReducer";

const initialState = {
  token: localStorage.getItem("token") || null,
  currentCategoryId: null,
  selectedSubCategoriesIds: [],
  challenges: [],
  currentChallenge: null,
  categories: [],
};

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const {
    currentCategoryId,
    categories,
    selectedSubCategoriesIds,
    challenges,
    token,
  } = state;

  const headers = createHeader(token);

  const register = async () => {
    const res = await axios.post("/user/register/", {
      username: "ljk",
      first_name: "",
      last_name: "",
      email: "test12@test.com",
      password: "lkj",
    });
    console.log("register", res);
  };

  const login = async (cred) => {
    const res = await axios.post("/user/login/", cred);
    console.log("res", res);
    const {
      data: { token },
    } = res || {};
    if (token) dispatch({ type: "SET_TOKEN", payload: token });
  };

  const setCategory = (id) => {
    dispatch({ type: "SET_CATEGORY", payload: id });
  };

  const getExcerciseList = async () => {
    console.log("header", headers);
    const res = await axios.get("/exercises/list/", { headers });
    console.log("getExcerciseList", res);
    const { data } = res;
    dispatch({ type: "SET_EXCERCISES", payload: data });
  };

  const toggleSubCategory = (id) => {
    dispatch({ type: "TOGGLE_SUB_CATEGORY", payload: id });
  };

  const setCurrentChallenge = (challenge) => {
    dispatch({ type: "SET_CURRENT_CHALLENGE", payload: challenge });
  };

  const getCategories = async () => {
    const res = await axios.get("/categories/list/", { headers });
    console.log("getCategories", res);
    const { data } = res;

    data?.forEach(async (cat) => {
      const res = await axios.get(`/categories/list/${cat.id}/`, {
        headers,
      });
      const { data } = res;
      console.log("subCategories", data);
      cat.sub = data;
    });
    console.log("mappedCategories", data);
    dispatch({ type: "SET_CATEGORIES", payload: data });
  };

  return (
    <AppContext.Provider
      value={{
        currentCategoryId,
        categories,
        selectedSubCategoriesIds,
        challenges,
        token,
        setCategory,
        toggleSubCategory,
        setCurrentChallenge,
        login,
        register,
        getExcerciseList,
        getCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
