import React from 'react';
import style from './_ProfileInfo.module.scss';

const ProfileInfo = (props) => {

    const formatLink = (url) => url.startsWith('http') ? url : `https://${url}`;

    return (
        <div className={style['description']}>
            <div className={style['description__container']}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <h3 className={style['description__title']}>Contacts:</h3>
                <ul className={style['description__list']}>

                    {props.profile.contacts.facebook && (
                        <li className={style['description__item']}>
                            Facebook: <a className={style['description__link']} href={formatLink(props.profile.contacts.facebook)} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                                {props.profile.contacts.facebook}
                            </a>
                        </li>
                    )}

                    {props.profile.contacts.vk && (
                        <li className={style['description__item']}>
                            VK: <a className={style['description__link']} href={formatLink(props.profile.contacts.vk)} target="_blank" rel="noopener noreferrer" aria-label="VK" title="VK">
                                {props.profile.contacts.vk}
                            </a>
                        </li>
                    )}

                    {props.profile.contacts.twitter && (
                        <li className={style['description__item']}>
                            Twitter: <a className={style['description__link']} href={formatLink(props.profile.contacts.twitter)} target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
                                {props.profile.contacts.twitter}
                            </a>
                        </li>
                    )}

                    {props.profile.contacts.instagram && (
                        <li className={style['description__item']}>
                            Instagram: <a className={style['description__link']} href={formatLink(props.profile.contacts.instagram)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                                {props.profile.contacts.instagram}
                            </a>
                        </li>
                    )}

                    {props.profile.contacts.github && (
                        <li className={style['description__item']}>
                            GitHub: <a className={style['description__link']} href={formatLink(props.profile.contacts.github)} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                {props.profile.contacts.github}
                            </a>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
