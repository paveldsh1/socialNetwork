import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Auth/Login/Login";

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                {/* <Login /> */}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer/> }/>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>
                    <Route path='/login'
                           render={ () => <Login /> }/>
                </div>
            </div>
        )
}

export default App;