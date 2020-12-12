export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_CATEGORIES":
      return state;

    case "LOAD_AUTH_HEADER":
      return state;

    case "SET_CATEGORY":
      if (state.currentCategoryId === payload) return state;

      return {
        ...state,
        currentCategoryId: payload,
        selectedSubCategoriesIds: [],
      };

    case "TOGGLE_SUB_CATEGORY":
      const exists = state.selectedSubCategoriesIds.includes(payload);

      if (exists)
        return {
          ...state,
          selectedSubCategoriesIds: state.selectedSubCategoriesIds.filter(
            (id) => id !== payload
          ),
        };

      return {
        ...state,
        selectedSubCategoriesIds: [...state.selectedSubCategoriesIds, payload],
      };

    case "SET_CURRENT_CHALLENGE":
      return {
        ...state,
        currentChallenge: payload,
      };

    case "SET_TOKEN":
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
      };

    case "SET_EXCERCISES":
      return {
        ...state,
        challenges: payload,
      };

    default:
      throw new Error(`Unhandled action ${type}`);
  }
};
