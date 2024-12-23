import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import Header from './Header';
import {setAuthUserData, setAuthMessage} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                credentials: 'include' // could also try 'same-origin' or 'include'
            })
            .then(response => response.json())    
            .then(data => {
                if(data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    props.setAuthUserData(id, login, email);
                }
                else {
                    const message = data.messages[0];
                    props.setAuthMessage(message);
                }
            });
    }, [])
    
    return <Header {...props}/>;
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData, setAuthMessage})(HeaderContainer);

