import React from 'react';
import style from './../_Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;