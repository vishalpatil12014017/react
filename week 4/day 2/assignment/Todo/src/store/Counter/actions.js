import {  INC_COUNT, DEC_COUNT } from "./actionTypes.js"

export const incCounter = (payload) => {
    return {
        type: INC_COUNT,
        payload,
    }
}
export const decCounter = (data) => {
    return {
        type: DEC_COUNT,
        payload: data,
    }
}

