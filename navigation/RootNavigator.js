import React, { useEffect } from 'react';
import AppDrawerNavigator from '../modules/Home/navigator'; // Your main drawer navigator
import { checkAuthStatus } from '../modules/Auth/auth'; // Function to check auth status
import { useSelector, useDispatch } from 'react-redux';
import AuthNavigator from '../modules/Auth/navigator';
import { login, logout } from '../modules/Auth/slice';

export default function RootNavigator() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await checkAuthStatus();
            if (authStatus) {
                dispatch(login());
            } else {
                dispatch(logout());
            }
        };
        checkAuth();
    }, [dispatch]);

    return (
        <>
            {isAuthenticated ? <AppDrawerNavigator /> : <AuthNavigator />}
        </>
    );
}

