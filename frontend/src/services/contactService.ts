import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const contactService = {
    sendMessage: (data: { name: string; email: string; message: string }) => {
        return api.post('/contact', data);
    },
};
