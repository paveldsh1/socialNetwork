import React, { useEffect } from 'react';
import Profile from "./Profile";
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {
    const { userId } = useParams();
    const effectiveUserId = userId || 2;

    useEffect(() => props.getProfile(effectiveUserId), [effectiveUserId]);

    return (
        <Profile {...props} />
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    };
}

const actionCreators = {
    setUserProfile,
    getProfile
};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);