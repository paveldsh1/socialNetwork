import React from 'react';
import Profile from "./Profile";
import { useEffect } from 'react';
import { setUserProfile } from '../../redux/profile-reducer';
import {connect} from "react-redux";
import { withRouter } from "react-router";

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if(!userId) {
        userId = 2
    }
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.json())
            .then(data => {
                props.setUserProfile(data)
            });
    }, [])

    return (
        <Profile {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const actionCreators = {
    setUserProfile
}

export default connect(mapStateToProps, actionCreators)(withRouter(ProfileContainer));



