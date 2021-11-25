
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { todos } from "./Todos/reducer.js"
import { counter } from "./Counter/reducer.js";
const rootReducer=combineReducers({
    todos,counter
})
const middleware=(store)=>(next)=>(action)=>{
    console.log("m1")
    next(action)
}
const middleware1=(store)=>(next)=>(action)=>{
    console.log("m2")
    next(action)
}
export const store = createStore(rootReducer,
    compose(applyMiddleware(middleware,middleware1), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
 )
console.log(store.getState());