// class Store {
//     constructor(reducer, initstate){
//         this.reducer = reducer
//         this.state = initstate
//     }

//     getState(){
//         return this.state
//     }

//     dispatch(action){
//         this.state = this.reducer(this.state, action)
//     }
// }

import { createStore } from "redux";
import {addTodo, decCounter, incCounter } from "./store/actions.js";
import { reducer } from "./store/reducer.js";


// const reducer = (state, action) =>{
//     if(action.type === INC_COUNT){
//         return {
//             count: state.count + action.payload
//         }
//     } 
//     if(action.type === DEC_COUNT){
//         return {
//             count: state.count - action.payload
//         }
//     }
// }


const init = {count: 10, todos:[]};

const store = createStore(reducer, init)

console.log(store.getState());

store.dispatch(incCounter(1))

console.log(store.getState());

store.dispatch(decCounter(1))

console.log(store.getState());

store.dispatch(addTodo({id:1, status:"false", title:"Learn Redux" }))
store.dispatch(addTodo({id:2, status:"false", title:"Learn Redux" }))



console.log(store.getState());