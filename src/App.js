// import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Auth/Login/Login";
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';


const App = (props) => {

    useEffect(() => {
        if(props){
            const initializeApp = async () => props.initializeApp();
            initializeApp();
        }
    }, []);

    if(!props.initialized) return Preloader;
    else {
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Login />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);