import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer,
});

export default rootReducer;
