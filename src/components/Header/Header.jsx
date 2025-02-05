// import React from 'react';
import s from './_Header.module.scss';
import { NavLink } from 'react-router-dom';
import Login from "../Auth/Login/Login";
import { useState } from "react";

const Header = (props) => {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleLoginOpen = () => {
        setLoginVisible(true);
    };

    const handleLoginClose = () => {
        setLoginVisible(false);
    };

    return (
        <header className={s['header']}>
            <div className={s['header__title']}>
                <p>Social Network</p>
                <div />
                {props.isAuth ?
                    <div className={`${s['header__text']} badge bg-primary text-wrap`}>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                    </div>
                    :
                    <>
                        <NavLink to="/login">
                            <button
                                type="button"
                                onClick={handleLoginOpen}
                                className={`${s['header__button']} btn btn-primary`}>
                                Login
                            </button>
                        </NavLink>
                        {isLoginVisible && <Login onClose={handleLoginClose} />}
                    </>
                }
            </div>
            {props.isAuth ?
                <div className={`${s['header__login']} badge bg-primary text-wrap`}>
                    Login: {props.login}
                </div>
                :
                <NavLink to="/login">
                    <button
                        type="button"
                        className={`${s['header__button']} btn btn-primary`}>
                        Login
                    </button>
                </NavLink>
            }
        </header>
    )
}

export default Header;