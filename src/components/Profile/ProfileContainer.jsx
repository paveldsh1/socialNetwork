import React, { useEffect } from 'react';
import Profile from "./Profile";
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { useParams } from "react-router-dom"; // Импортируйте useParams
import { usersAPI } from "../../api/api";

const ProfileContainer = (props) => {
    const { userId } = useParams();
    const effectiveUserId = userId || 2;

    useEffect(() => {
        const fetchProfileData = async () => {
            const data = await usersAPI.getProfile(effectiveUserId);
            props.setUserProfile(data);
        };

        fetchProfileData();
    }, [effectiveUserId]);

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
    setUserProfile
};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);