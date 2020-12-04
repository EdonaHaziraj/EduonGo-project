const initialValue = {
  isFound: false,
  isLoading: false,
  courseData: null,
};

export const searchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "BEGIN_SEARCH":
      return {
        ...state,
        isFound: false,
        isLoading: true,
      };
    case "courses_FOUND":
      return {
        isFound: true,
        isLoading: false,
        courseData: action.payload,
      };
    case "course_NOT_FOUND":
      return {
        isFound: false,
        isLoading: false,
        courseData: null,
      };
    case "CLEAR_SEARCH":
      return {
        isFound: false,
        isLoading: false,
        courseData: null,
      };
    default:
      return state;
  }
};
