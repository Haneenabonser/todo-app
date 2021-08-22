import React, { useState, useEffect } from 'react';
export const AuthContext = React.createContext();
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const API = 'https://auth-server-401.herokuapp.com';

function Auth(props) {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    function validateToken(token) {
        try {
            const user = jwt.decode(token);
            if (user) setLoginState(true, token, user);
        } catch (error) {
            setLoginState(false, null, {});
            console.log(`Token Validation Error ${error.message}`);
            alert('Ivalid Token');
        }
    }

    useEffect(() => {
        const token = cookie.load('auth');
        validateToken(token);
    }, []);



    function setLoginState(loggedIn, token, user) {
        cookie.save('auth', token);
        setUser({ user });
        setLoggedIn(loggedIn);
    }

    function setLogoutState(loggedIn, user) {
        cookie.save('auth', null);
        setUser({ user });
        setLoggedIn(loggedIn);
    }

    async function login(username, password) {
        try {
            const res = await superagent
                .post(`${API}/signin`)
                .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
            validateToken(res.body.token);
        } catch (error) {
            console.error(error.message);
            alert('Invalid Username or password');

        }
    }

    async function signup(username, password, role) {
        try {
            const res = await superagent.post(`${API}/signup`, {
                username,
                password,
                role,
            });

            validateToken(res.body.token);
        } catch (error) {
            console.error(error.message);
            prompt('Invalid Inputs')
        }
    }

    function logout() {
        setLogoutState(false, {});
    }

    const state = {
        loggedIn,
        user,
        setLoggedIn,
        login,
        signup,
        logout,
        setUser,
    };

    return (
        <AuthContext.Provider
            value={state}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default Auth;