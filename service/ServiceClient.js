import axios from 'axios';

export const client = 'http://localhost:8081/client';
export const vet = 'http://localhost:8081/vet';
export const pet = 'http://localhost:8081/pet';
export const file = 'http://localhost:8081/file';
export const medicine = 'http://localhost:8081/medicine';
export const detail = 'http://localhost:8081/detail';

 

export const getAPI = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const createAPI = async (url, arg) => {
    console.log(url,arg)
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateAPI = async (url, arg) => {
    const response = await axios.put(url, arg);
    return response.data;
};