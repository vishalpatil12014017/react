import { DEC_COUNT, INC_COUNT } from "./actionTypes.js"

export const reducer = (state, { type, payload }) => {
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