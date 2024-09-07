import { postRequest } from "../../api";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { E_STORAGE_KEYS } from "./constants";

export const attemptLogin = async (username, password) => {
    const data = { login: username, password, auth_type: 'customer' };
    const response = await postRequest('/auth/tokens', data);

    //Save token to local storage
    if (response?.access_token) {
        const tokenData = JSON.stringify({
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            access_token_expiration: response.access_token_expiration,
            refresh_token_expiration: response.refresh_token_expiration
        })
        await AsyncStorage.setItem(E_STORAGE_KEYS.AUTH_TOKEN, tokenData);
    }

    return response
};
