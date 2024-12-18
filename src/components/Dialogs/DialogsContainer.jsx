import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//state=store.getState();
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage //Dialogs перерисуйся если меняется dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Dialogs);

export default DialogsContainer;