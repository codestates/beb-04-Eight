import { combineReducers } from "redux";
import modalReducer from "./modalReducer"
import loginReducer from "./loginReducer"
import writerReducer from "./writerReducer"
import searchReducer from "./searchReducer"
import idReducer from "./idReducer"

const rootReducer = combineReducers({
  modalReducer,
  loginReducer,
  writerReducer,
  searchReducer,
  idReducer
})

export default rootReducer;