const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; 

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    pagesCount: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }; 
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }; 
        case SET_USERS: 
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_PAGES_COUNT: 
            return {
                ...state,
                pagesCount: action.pagesCount
            };
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setPagesCountAC = (pagesCount) => ({type: SET_PAGES_COUNT, pagesCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;