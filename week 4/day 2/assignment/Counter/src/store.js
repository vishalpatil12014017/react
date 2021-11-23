
import { createStore } from "redux";
import { reducer } from "./store/reducer";
const init = { count: 1 }
export const store = createStore(reducer, init)
// console.log(store.getState());