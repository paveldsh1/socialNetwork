// import React from 'react';
import s from './_Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s['header__container']}>
                <img className={s['header__img']} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
                {props.isAuth ? 
                    <div className={`${s['header__text']} badge bg-primary text-wrap`}>
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
            </div>
        </header>
    )
}

export default Header;