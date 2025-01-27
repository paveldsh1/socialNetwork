import { auth } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';
const SET_AUTH_MESSAGE = 'social-network/auth/SET_AUTH_MESSAGE';
const SET_ENTERED_AUTH_USER_DATA = 'social-network/auth/SET_ENTERED_AUTH_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    message: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_AUTH_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case SET_ENTERED_AUTH_USER_DATA:
            return {
                ...state,
                login: action.login,
                email: action.email
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}})
export const setAuthMessage = (message) => ({type: SET_AUTH_MESSAGE, message})
export const setEnteredAuthUserData = (email, password, rememberMe) => ({type: SET_ENTERED_AUTH_USER_DATA, data: {email, password, rememberMe}})

export const authMe = () => async (dispatch) => {
    const data = await auth.authMe();
    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    } else {
        const message = data.messages[0];
        dispatch(setAuthMessage(message));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await auth.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(authMe())
    }
    else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    const data = await auth.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;