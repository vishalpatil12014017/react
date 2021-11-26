import {  ADD_TODOS_LOADING, DEL_TODOS, ADD_TODOS_SUCCESS, ADD_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./actionTypes.js"
import axios from "axios"
export const Addtodosloading = (payload) => {
    return {
        type: ADD_TODOS_LOADING,
        payload,
    }
}
export const Addtodossuccess = (data) => {
    return {
        type: ADD_TODOS_SUCCESS,
        payload: data,
    }
}
export const Addtodoserror = (err) => {
    return {
        type: ADD_TODOS_ERROR,
        payload: err,
    }
}
export const gettodosloading = (payload) => {
    return {
        type: GET_TODOS_LOADING,
        payload,
    }
}
export const gettodossuccess = (data) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: data,
    }
}
export const gettodoserror = (err) => {
    return {
        type: GET_TODOS_ERROR,
        payload: err,
    }
}
export const Remtodos = (payload) => {
    return {
        type: DEL_TODOS,
        payload,
    }
}

export const gettodos =()=> async (dispatch) => {
    dispatch(gettodosloading())
    try {
        const { data } = await axios.get("http://localhost:3001/todos")
        dispatch(gettodossuccess(data))

    } catch (err) {
        dispatch(gettodoserror(err))
    }
}