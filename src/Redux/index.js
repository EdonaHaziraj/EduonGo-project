import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./Reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
