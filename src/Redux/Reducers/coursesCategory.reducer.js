const initialValue = {
  isFound: false,
  isLoading: false,
  courseCategory: null,
};

export const coursesCategoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "BEGIN_CATEGORY_SEARCH":
      return {
        ...state,
        isFound: false,
        isLoading: true,
        courseCategory: null,
      };
    case "courses_category_FOUND":
      return {
        isFound: true,
        isLoading: false,
        courseCategory: action.payload,
      };
    default:
      return state;
  }
};
