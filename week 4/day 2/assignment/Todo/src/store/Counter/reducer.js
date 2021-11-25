import { INC_COUNT, DEC_COUNT } from "./actionTypes.js"
const init = { count: 1 }
export const counter = (state=init, { type, payload }) => {
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
        default:
            return state
    }

}