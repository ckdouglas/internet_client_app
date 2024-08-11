import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawerNavigator from './AppNavigator'; // Your main drawer navigator
import AuthNavigator from './AuthNavigator'; // Your auth navigator
import { checkAuthStatus } from '../business/auth/auth'; // Function to check auth status
import { login, logout } from '../redux/slices/authSlice'; // Import Redux actions
import { useSelector, useDispatch } from 'react-redux';

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

