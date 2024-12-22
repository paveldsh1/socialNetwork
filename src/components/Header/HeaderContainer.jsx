import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import Header from './Header';

const HeaderContainer = (props) => {
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                credentials: 'include' // could also try 'same-origin'
            })
            .then(response => response.json())    
            .then(data => {
                console.log('Fetched data:', data);
                debugger;
            });
    }, [])
    
    return <Header {...props}/>;
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);

