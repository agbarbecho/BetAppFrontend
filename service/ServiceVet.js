import axios from 'axios';

export const user = 'http://localhost:8081/vet';

export const getAPIVet = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const createAPIVet = async (url, arg) => {
    const response = await axios.post("register" , body);
    return response.data;
};

export const updateAPIVet = async (url, arg) => {
    const response = await axios.put(url, arg);
    return response.data;
};