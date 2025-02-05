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
                Social Network
            </div>
            {props.isAuth ?
                <div className={`${s['header__login']}`}>
                    {props.login} - <button type="button" className='badge bg-primary' onClick={props.logout}>Log out</button>
                </div>
                :
                <>
                    <NavLink to="/login">
                        <button
                            type="button"
                            onClick={handleLoginOpen}
                            className='btn btn-primary'>
                            Login
                        </button>
                    </NavLink>
                    {isLoginVisible && <Login onClose={handleLoginClose} />}
                </>
            }
        </header>
    )
}

export default Header;