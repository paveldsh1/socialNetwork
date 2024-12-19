import React from 'react';
import s from './Header.module.scss';
import Login from '../Auth/Login/Login';

const Header = () => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <Login></Login>
    </header>
}

export default Header;