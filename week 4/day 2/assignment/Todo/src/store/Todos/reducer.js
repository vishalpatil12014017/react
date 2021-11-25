import { ADD_TODOS_LOADING, ADD_TODOS_SUCCESS, ADD_TODOS_ERROR, GET_TODOS_LOADING, DEL_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./actionTypes.js"
const init = { todos:{
    loading:false,
    data:[],
    error:false
} }
export const todos = (state=init, { type, payload }) => {
    switch (type) {
      
        case ADD_TODOS_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true
                }
            };
        case ADD_TODOS_SUCCESS:
            return {
                ...state,
                todos: {
                    loading: false,
                    ...state.todos,
                    data: [...state.todos.data, payload]
                }
            };
        case ADD_TODOS_ERROR:
            return {
                ...state,
                todos: {
                    loading: false,
                    ...state.todos,
                    error: payload
                }
            };
        case GET_TODOS_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false
                }
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: {
                    loading: false,
                    ...state.todos,
                    data: payload
                }
            };
        case GET_TODOS_ERROR:
            return {
                ...state,
                todos: {
                    loading: false,
                    ...state.todos,
                    error: payload
                }
            };
        case DEL_TODOS:
            return {
                ...state,
                todos: [...state.todos, payload]
            }

        default:
            return state
    }

}