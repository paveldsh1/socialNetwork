import React from 'react';
import Profile from "./Profile";
import { useEffect } from 'react';
import { setUserProfile } from '../../redux/profile-reducer';
import {connect} from "react-redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, actionCreators)(ProfileContainer);



