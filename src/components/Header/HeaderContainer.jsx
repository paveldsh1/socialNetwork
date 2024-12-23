import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import Header from './Header';
import {setAuthUserData, setAuthMessage} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                credentials: 'include' // could also try 'same-origin'
            })
            .then(response => response.json())    
            .then(data => {
                if(data.resultCode === 0) {
                    debugger
                    setAuthUserData(data.data);
                }
                else {
                    debugger
                    console.log(data.messages[0]);
                    const message = data.messages[0];
                    setAuthMessage(message);
                    debugger
                }
            });
    }, [])
    
    return <Header {...props}/>;
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {setAuthUserData, setAuthMessage})(HeaderContainer);

