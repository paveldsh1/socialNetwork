import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import { setAuthUserData, setAuthMessage, authMe, logout } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        const fetchAuthData = async () => props.authMe();
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

export default connect(mapStateToProps, { setAuthUserData, setAuthMessage, authMe, logout })(HeaderContainer);