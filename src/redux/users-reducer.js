import { usersAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; 
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    pagesCount: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_FOLLOWING_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setPagesCount = (pagesCount) => ({type: SET_PAGES_COUNT, pagesCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress, id})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

export const followUser = (userId) => async (dispatch) => {
    const data = await usersAPI.followUser(userId);
    if(data.resultCode === 0) {
        dispatch(follow(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const unfollowUser = (userId) => async (dispatch) => {
    const data = await usersAPI.unfollowUser(userId);
    if(data.resultCode === 0) {
        dispatch(unfollow(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export default usersReducer;