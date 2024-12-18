import React from 'react';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setPagesCount, toggleIsFetching} from "../../../src/redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching
    }
}

const actionCreators = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPagesCount,
    toggleIsFetching
 }

const UsersContainer = connect(mapStateToProps, actionCreators)(Users);

export default UsersContainer;