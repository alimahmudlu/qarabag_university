import axios from 'axios';
import {toast} from "react-toastify";

const REQUEST_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_BASE_URL;
const REQUEST_TIME_OUT = process.env.NEXT_PUBLIC_REQUEST_TIME_OUT;

const ApiService = axios.create({
    timeout: REQUEST_TIME_OUT,
    baseURL: REQUEST_BASE_URL,
});
let originalConfig = {url: ''};

ApiService.interceptors.request.use(
    async (config) => {
        if (!config.headers['Content-Language']) {
            if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('language')) {
                config.headers['Content-Language'] = localStorage.getItem('language');
            }
            else {
                config.headers['Content-Language'] = 'az';
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

ApiService.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        originalConfig = error.config || {};

        if (error.response) {
            toast(error.response.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return Promise.reject(error);

        }

        return Promise.reject(error);
    }
);

export default ApiService;