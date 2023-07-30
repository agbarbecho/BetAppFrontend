import axios from 'axios';

export const client = 'http://localhost:8081/client';

export const getAPIClient = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const createAPIClient = async (url, arg) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateAPIClient = async (url, arg) => {
    const response = await axios.put(url, arg);
    return response.data;
};