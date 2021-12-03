import { types } from "../Types/types";

export const authReducer = (state = {}, action) => {
console.log(action.type,"en reduces swh")
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state
    }

}
