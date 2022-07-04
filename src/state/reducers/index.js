
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    post: postReducer,
    user:userReducer
})

export default reducers
