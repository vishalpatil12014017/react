import { GET_USERS_LOADING,GET_USERS_SUCCESS, GET_USERS_ERROR } from "./actionTypes.js"
const init = { users:{
    loading:false,
    data:[],
    error:false
} }
export const users = (state=init, { type, payload }) => {
    switch (type) {
        case GET_USERS_LOADING:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: true
                }
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    data: payload
                }
            };
        case GET_USERS_ERROR:
            return {
                ...state,
                users: {
                    loading: false,
                    ...state.users,
                    error: payload
                }
            };
        default:
            return state
    }

}