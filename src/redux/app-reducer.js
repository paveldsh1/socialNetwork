import { authMe } from "../redux/auth-reducer";
const INITIALIZED_SUCCED = "INITIALIZED_SUCCED";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCED:
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}

export const initializedSucced = () => ({type: INITIALIZED_SUCCED})

export const initializeApp = () => dispatch => {
    const promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucced());
        })
}

export default appReducer;