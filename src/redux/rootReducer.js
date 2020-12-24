import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import formReducer from "./form/formReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer,
  user: userReducer,
});

export default rootReducer;
