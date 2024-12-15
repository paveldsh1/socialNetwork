import React from 'react';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setPagesCountAC} from "../../../src/redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {dispatch(followAC(userId))},
       unfollow: (userId) => {dispatch(unfollowAC(userId))},
       setUsers: (users) => {dispatch(setUsersAC(users))},
       setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
       setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount))},
       setPagesCount: (pagesCount) => {dispatch(setPagesCountAC(pagesCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;