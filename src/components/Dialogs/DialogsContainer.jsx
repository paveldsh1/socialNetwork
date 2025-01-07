import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

//state=store.getState();
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage //Dialogs перерисуйся если меняется dialogsPage
    }
}

const actionCreators = {
    sendMessage
}

const DialogsContainer = connect(mapStateToProps, actionCreators)(withAuthRedirect(Dialogs));

export default DialogsContainer;