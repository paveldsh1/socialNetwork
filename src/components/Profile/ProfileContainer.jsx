import React, { useEffect } from 'react';
import Profile from "./Profile";
import { setUserProfile, getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from "redux";

const ProfileContainer = (props) => {
    const { userId } = useParams();
    const effectiveUserId = userId || 2;

    useEffect(() => {
        const fetchProfileData  = async () => {
            props.getProfile(effectiveUserId);
            props.getStatus(effectiveUserId);
        }
        fetchProfileData();
    }, [effectiveUserId]);

    return (
        <Profile {...props} />
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
}

const actionCreators = {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus
};

export default compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect
)(ProfileContainer);