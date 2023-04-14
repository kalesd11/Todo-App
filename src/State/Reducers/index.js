import { combineReducers } from "redux";
import addTodoReducer from "./addTodoReducer";
// import { HandleDone } from "./isCheckedReducer";

export const reducers = combineReducers({
    add:addTodoReducer,
    // checked:HandleDone
})