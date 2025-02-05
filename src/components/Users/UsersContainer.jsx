import {follow, unfollow, requestUsers, setCurrentPage, setPagesCount, toggleFollowingInProgress, followUser, unfollowUser} from "../../../src/redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from "redux";
import { memoizedGetUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getPagesCount, getIsFetching, getFollowingInProgress } from "../../redux/users-selector"
 
const mapStateToProps = (state) => {
    return {
        users: memoizedGetUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pagesCount: getPagesCount(state),
        isFetching: getIsFetching(state), 
        followingInProgress: getFollowingInProgress(state)
    }
}

const actionCreators = {
    follow,
    unfollow,
    setCurrentPage,
    setPagesCount,
    toggleFollowingInProgress,
    requestUsers,
    followUser,
    unfollowUser
 }

export default compose(
    connect(mapStateToProps, actionCreators), 
    withAuthRedirect
)(Users);