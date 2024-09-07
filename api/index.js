import axios from 'axios';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { E_STORAGE_KEYS } from '../modules/Auth/constants';


const API_BASE_URL = 'https://billing.agapetechfibre.co.ke/api/2.0/admin';


export const apiClient = ()=> {
const axiosConfig = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
 axiosConfig.interceptors.request.use(injectAuthHeaders, rejectWithError);
    return axiosConfig;
}


async function injectAuthHeaders(requestConfig) {
    try {
        const tokenString = await AsyncStorage.getItem(E_STORAGE_KEYS.AUTH_TOKEN);
        const { access_token } = JSON.parse(tokenString);

        if (access_token !== null) {
            requestConfig.headers["Authorization"] = `Splynx-EA (access_token=${access_token})`;
        }
    } catch (error) {
    }
    finally {
        return requestConfig;
    }
}

async function rejectWithError(error) {
    return Promise.reject(error);
}

export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await apiClient().get(endpoint, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postRequest = async (endpoint, data = {}) => {
    try {
        const response = await apiClient().post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
