
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { todos } from "./Todos/reducer.js"
import { counter } from "./Counter/reducer.js";
import { Auth } from "./Auth/reducer.js";
const rootReducer=combineReducers({
    todos,counter,Auth
})
const middleware=(store)=>(next)=>(action)=>{
    if(typeof action ==="function"){
        action(store.dispatch)
    }
    else{
        next(action)
    }
   
}

export const store = createStore(rootReducer,
    compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
 )
console.log(store.getState());