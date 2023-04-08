import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
};


export const getItem = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
    return response.data;
};

export const createItem = async (item) => {
    const response = await axios.post(`${API_BASE_URL}/posts`, item);
    return response.data;
};

export const updateItem = async (item) => {
    const response = await axios.put(`${API_BASE_URL}/posts/${item.id}`, item);
    return response.data;
};

export const deleteItem = async (id) => {
    await axios.delete(`${API_BASE_URL}/posts/${id}`);
};
