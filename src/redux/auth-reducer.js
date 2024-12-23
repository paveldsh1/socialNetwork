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
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}})
export const setAuthMessage = (message) => ({type: SET_AUTH_MESSAGE, message})

export default authReducer;