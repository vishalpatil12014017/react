import { GET_USERS_LOADING,GET_USERS_SUCCESS, GET_USERS_ERROR } from "./actionTypes.js"
import axios from "axios"
import FetchUsers from "../../components/Pages/FetchUser.jsx"
export const getusersloading = (payload) => {
    return {
        type: GET_USERS_LOADING,
        payload,
    }
}
export const getuserssuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data,
    }
}
export const getuserserror = (err) => {
    return {
        type: GET_USERS_ERROR,
        payload: err,
    }
}
export const getusers =()=> async (dispatch) => {
    dispatch(getusersloading())
    try {
        FetchUsers("vishal")
            .then((res) => {
                 dispatch(getuserssuccess(res.data.items))
            })
            .catch((err) => {
                dispatch(getuserserror(err))
            })

    } catch (err) {
        dispatch(getuserserror(err))
    }
}