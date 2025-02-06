import React from 'react';
import style from './_Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { Image } from "antd";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={style['profile']}>
            <div className={style['profile__avatar']}>
                <Image src={props.profile.photos.large} />
            </div>
            <div className={style['profile__content']}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <ProfileInfo profile={props.profile} />
                <PostsContainer />
            </div>
        </div>
    )
}

export default Profile;