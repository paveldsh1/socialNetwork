import React from 'react';
import s from './../_Dialogs.module.scss';

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;