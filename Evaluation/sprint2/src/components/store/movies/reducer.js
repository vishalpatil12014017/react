import { GET_MOVIES_LOADING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from './actionsTypes'
const init = {
    movies: {
        loading: false,
        data: [],
        error: false
    }
}
export const movies = (state = init, { type, payload }) => {
    switch (type) {
        case GET_MOVIES_LOADING:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    loading: true
                }
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: {
                
                    ...state.movies,
                    loading:false,
                   data:payload
                  
                }
            }
        case GET_MOVIES_ERROR:
            return {
                ...state,
                movies: {
                    loading: false,
                    ...state.movies,
                    error:payload
                    
                }
            }


        default:
           return state
    }
}