import './_App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';
import { lazy, Suspense } from 'react';

const DialogsContainer = lazy(() =>
    import('./components/Dialogs/DialogsContainer')
);

const UsersContainer = lazy(() =>
    import('./components/Users/UsersContainer')
);

const App = (props) => {

    useEffect(() => {
        if (props) {
            const initializeApp = async () => props.initializeApp();
            initializeApp();
        }
    }, []);

    if (!props.initialized) return <Preloader />;
    else {
        return (
            <div className='app'>
                <HeaderContainer />
                <Navbar />
                <main className='app__main'>
                    <Routes>
                        <Route path='/dialogs' element={
                            <Suspense fallback={<Preloader />}>
                                <DialogsContainer />
                            </Suspense>
                        } />
                        <Route path='/users' element={
                            <Suspense fallback={<Preloader />}>
                                <UsersContainer />
                            </Suspense>
                        } />
                        <Route path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Login />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);