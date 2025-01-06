import { auth } from "../api/api";
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_MESSAGE = 'SET_AUTH_MESSAGE';
const SET_ENTERED_AUTH_USER_DATA = 'SET_ENTERED_AUTH_USER_DATA';

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
                isAuth: true
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

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}})
export const setAuthMessage = (message) => ({type: SET_AUTH_MESSAGE, message})
export const setEnteredAuthUserData = (login, email) => ({type: SET_ENTERED_AUTH_USER_DATA, data: {login, email}})

export const authMe = () => async (dispatch) => {
    const data = await auth.authMe();
    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, login, email));
    } else {
        const message = data.messages[0];
        dispatch(setAuthMessage(message));
    }
}

export const sendAuthData = (login, email, rememberMe, sendAuthData) => async (dispatch) => {
    debugger
    const data = await auth.sendAuthData(login, email, rememberMe, sendAuthData);
    if (data.resultCode === 0) {
        dispatch(setEnteredAuthUserData(login, email))
    }
}

export default authReducer;