import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionTypes.js"

export const incCounter = (payload) => {
    return{
        type: INC_COUNT,
        payload,
    }
}

export const decCounter = (payload) => {
    return{
        type: DEC_COUNT,
        payload,
    }
}

export const addTodo = (payload) => {
    return{
        type: ADD_TODO,
        payload,
    }
}
