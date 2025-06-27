import axios from 'axios';

const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return 'https://dreamcationholidayhomesbackend.onrender.com';
    } else {
        return 'http://localhost:5000';
    }
};

const proxyApi = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
    },
});

export default proxyApi;
