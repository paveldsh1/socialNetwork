import {addPost} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const actionCreators = {
    addPost
}

export default compose(
    connect(mapStateToProps, actionCreators)
)(Posts);