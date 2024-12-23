import React from 'react';
import Profile from "./Profile";
import { useEffect } from 'react';
import { setUserProfile } from '../../redux/profile-reducer';
import {connect} from "react-redux";
import { withRouter } from "react-router";
import { usersAPI } from "../../api/api";

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if(!userId) {
        userId = 2
    }
    useEffect(() => {
        const fetchProfileData = async () => {
            const data = await usersAPI.getProfile(userId);
            props.setUserProfile(data);
        };

        fetchProfileData();
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



