import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import {movies} from './store/movies/reducer'
import {Auth} from "./store/Auth/reducer"
const rootReducer=combineReducers({
    movies,Auth
})
const middleware=(store)=>(next)=>(action)=>{
    if(typeof action==="function"){
        action(store.dispatch)
    }else{
        next(action)
    }
}
export const store = createStore(rootReducer,
    compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
 )
console.log(store.getState());