
import {GET_MOVIES_LOADING,GET_MOVIES_SUCCESS,GET_MOVIES_ERROR} from './actionsTypes'
import axios from 'axios'
export const getmoviesloading=(payload)=>{
    return{
        type:GET_MOVIES_LOADING,
        payload
    }
}
export const getmoviessuccess=(data)=>{
    return{
        type:GET_MOVIES_SUCCESS,
        payload:data
    }
}
export const getmovieserror=(err)=>{
    return{
        type:GET_MOVIES_ERROR,
        payload:err
    }
}
export const getmovies=()=> async(dispatch)=>{
    dispatch(getmoviesloading())
    try{
        const {data}=await axios.get("http://localhost:3001/movies")
        dispatch(getmoviessuccess(data))
    }
    catch(err){
        dispatch(getmovieserror)
    }

}