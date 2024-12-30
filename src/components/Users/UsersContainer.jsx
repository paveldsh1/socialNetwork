import {follow, unfollow, getUsers, setCurrentPage, setPagesCount, toggleFollowingInProgress, followUser, unfollowUser} from "../../../src/redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching, 
        followingInProgress: state.usersPage.followingInProgress
    }
}

const actionCreators = {
    follow,
    unfollow,
    setCurrentPage,
    setPagesCount,
    toggleFollowingInProgress,
    getUsers,
    followUser,
    unfollowUser
 }

const UsersContainer = connect(mapStateToProps, actionCreators)(withAuthRedirect(Users));

export default UsersContainer;