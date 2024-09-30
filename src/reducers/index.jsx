import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import albumReducer from "./albumReducer";
import photoReducer from "./photoReducer";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  postData: postReducer,
  commentData: commentReducer,
  albumData: albumReducer,
  photoData: photoReducer,
  todoData: todoReducer,
  userData: userReducer,
});

export default rootReducer;
