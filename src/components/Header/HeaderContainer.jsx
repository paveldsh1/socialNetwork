import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return <Header {...props} />;
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);