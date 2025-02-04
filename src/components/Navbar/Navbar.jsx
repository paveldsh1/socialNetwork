import React from 'react';
import style from './_Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;