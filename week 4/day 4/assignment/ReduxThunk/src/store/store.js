
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { users } from "./GitchUsers/reducer.js"
import { Auth,Register } from "./Auth/reducer.js";
const rootReducer=combineReducers({
    users,Auth,Register
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