import { combineReducers } from "redux";
import { searchReducer } from "./search.reducer";
import { coursesCategoryReducer } from "./coursesCategory.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  coursesCategory: coursesCategoryReducer,
});

export { rootReducer };
