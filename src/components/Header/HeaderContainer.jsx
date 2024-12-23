import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import { setAuthUserData, setAuthMessage } from "../../redux/auth-reducer";
import { usersAPI } from "../../api/api";

const HeaderContainer = (props) => {
    useEffect(() => {
        const fetchAuthData = async () => {
            const data = await usersAPI.auth();
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                props.setAuthUserData(id, login, email);
            } else {
                const message = data.messages[0];
                props.setAuthMessage(message);
            }
        };

        fetchAuthData();
    }, []);

    return <Header {...props} />;
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthMessage })(HeaderContainer);