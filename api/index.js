import axios from 'axios';

const API_BASE_URL = 'http://private-anon-a75b54b61d-splynx.apiary-mock.com'; // Replace with your actual API base URL

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await apiClient.get(endpoint, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postRequest = async (endpoint, data = {}) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
