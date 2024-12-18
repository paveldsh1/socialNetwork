import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large}
                    alt="Profile"
                />
            </div>
            <div className={s.descriptionBlock}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p> 
                <p>{props.profile.lookingForAJobDescription}</p> 
                <div>
                    <h3>Контакты:</h3>
                    <ul>
                        {props.profile.contacts.facebook && <li>Facebook: {props.profile.contacts.facebook}</li>} 
                        {props.profile.contacts.vk && <li>VK: {props.profile.contacts.vk}</li>} 
                        {props.profile.contacts.twitter && <li>Twitter: {props.profile.contacts.twitter}</li>} 
                        {props.profile.contacts.instagram && <li>Instagram: {props.profile.contacts.instagram}</li>} 
                        {props.profile.contacts.github && <li>GitHub: {props.profile.contacts.github}</li>} 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;