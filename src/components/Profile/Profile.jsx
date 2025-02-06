import React from 'react';
import style from './_Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { Avatar } from 'antd';
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={style['profile']}>
            <div className="profile__avatar">
                <Avatar shape="square" size={64} src={props.profile.photos.large} />
            </div>
            <div className="profile__body">
                <ProfileInfo profile={props.profile}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;