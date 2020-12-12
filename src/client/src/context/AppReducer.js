export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_CATEGORIES":
      return state;

    case "LOAD_AUTH_HEADER":
      return state;

    case "SET_CATEGORY":
      return {
        ...state,
        currentCategoryId: payload,
      };
  }
};
