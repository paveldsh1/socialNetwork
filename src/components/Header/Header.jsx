// import React from 'react';
import s from './_Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s['header']}>
            <div className={s['header__title']}>
                <p>Social Network</p>
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