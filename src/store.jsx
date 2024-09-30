import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux"; //middlewear istf etmek isteyirikse
import { thunk } from "redux-thunk"; // async-action/  async emeliyyatlarimi heyata kechiren actionlari adi
import rootReducer from "./reducers";
const store = createStore(rootReducer, applyMiddleware(thunk)); //createStore(2 parametr qebul edir, reducerlerimizi, applyMiddleware function)


export default store;
