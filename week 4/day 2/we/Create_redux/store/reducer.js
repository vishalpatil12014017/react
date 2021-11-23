import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionTypes.js"

export const reducer = (state, {type, payload}) =>{
    switch (type) {
        case INC_COUNT:
            return {
                ...state,
                count: state.count + payload    
            };
        case DEC_COUNT:
            return {
                ...state,
                count: state.count - payload    
            }
        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, payload]   
        }
    
        default:
            return state
    }
       
}