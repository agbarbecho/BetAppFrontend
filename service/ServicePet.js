import axios from 'axios';

export const pet = 'http://localhost:8081/pet';

export const getAPIPet = async (url) => {
    const response = await axios.get(url, arg);
    return response.data;
};

export const createAPIPet = async (url, arg) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateAPIPet = async (url, arg) => {
    const response = await axios.put(url, arg);
    return response.data;
};