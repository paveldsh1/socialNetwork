import React from 'react';
import {followAC, unfollowAC, setUsersAC} from "../../../src/redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {dispatch(followAC(userId))},
       unfollow: (userId) => {dispatch(unfollowAC(userId))},
       setUsers: (users) => {dispatch(setUsersAC(users))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;