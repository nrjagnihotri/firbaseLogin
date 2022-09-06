import * as types from './actionTypes';
const initialState = {
    lodding: false,
    currentUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
        case types.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                lodding: true
            }
        case types.LOGOUT_SUCCESS:

            return {
                ...state,
                currentUser: null
            }
        case types.SET_USER: return {
            ...state,
            lodding: false,
            currentUser: action.payload,
        }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                lodding: false,
                currentUser: action.payload
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
        case types.GOOGLE_SIGN_IN_FAIL:
            return {
                ...state,
                lodding: false,
                error: action.payload
            }


        default: return state;
    }
}
export default userReducer;