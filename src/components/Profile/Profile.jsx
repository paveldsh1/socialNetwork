import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;