const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_MESSAGE = 'SET_AUTH_MESSAGE';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    message: null
};

const authReducer = (state = initialState, action) => {
    debugger
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.userData
            };
        case SET_AUTH_MESSAGE:
            debugger
            return {
                ...state,
                ...action.message
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, userId, login, email})
export const setAuthMessage = (message) => ({type: SET_AUTH_MESSAGE, message})

export default authReducer;