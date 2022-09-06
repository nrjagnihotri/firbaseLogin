
import * as types from './actionTypes';

import { googleAuthProvider, auth } from '../firebase/index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";


const registerStart = () => ({
    type: types.REGISTER_START,
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
})
const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error
})
const logoutStart = () => ({
    type: types.LOGOUT_START,
})

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,

})

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error
})

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})

const googleSigninStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
})

const googleSigninSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

const googleSigninFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
})

const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName,
                })
                dispatch(registerSuccess(user))
            }).catch((error) => dispatch(registerFail(error.message)))

    }
}

const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                if (email && password)
                    dispatch(loginSuccess(user));
            }).catch((error) => dispatch(loginFail(error.message)))

    }
}
const logoutInitiate = () => {
    return function (dispatch) {

        dispatch(logoutStart());
        auth.signOut()
            .then((response) => {
                dispatch(logoutSuccess(response));

            }).catch((error) => dispatch(logoutFail(error.message)))

    }
}

const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSigninStart());
        auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
            dispatch(googleSigninSuccess(user));
        }).catch((error) => dispatch(googleSigninFail(error.message)))

    }
}
export default registerInitiate;
export { loginInitiate, logoutInitiate, googleSignInInitiate };