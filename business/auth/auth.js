
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuthStatus = async () => {
    // Replace this with actual logic to check authentication status
    // For example, checking a token in local storage or an API call
    const token = await AsyncStorage.getItem('authToken');
    return token !== null; // Return true if token exists, otherwise false
    return false;
};
