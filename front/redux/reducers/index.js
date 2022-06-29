import { combineReducers } from "redux";
import modalReducer from "./modalReducer"
import loginReducer from "./loginReducer"
import writerReducer from "./writerReducer"
import searchReducer from "./searchReducer"

const rootReducer = combineReducers({
  modalReducer,
  loginReducer,
  writerReducer,
  searchReducer
})

export default rootReducer;