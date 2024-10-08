import axios from 'axios';
import {signOut, getCsrfToken, getSession} from "next-auth/react";
import { toast } from 'react-toastify';

const REQUEST_HEADER_AUTH_KEY = process.env.NEXT_PUBLIC_REQUEST_HEADER_AUTH_KEY;
const REQUEST_ADMIN_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_ADMIN_BASE_URL;
const REQUEST_TIME_OUT = process.env.NEXT_PUBLIC_REQUEST_TIME_OUT;
const REQUEST_HEADER_SECRET_KEY = process.env.NEXT_PUBLIC_REQUEST_HEADER_SECRET_KEY;
const REQUEST_HEADER_SECRET_VALUE = process.env.NEXT_PUBLIC_REQUEST_HEADER_SECRET_VALUE;
const REQUEST_NEXT_ADMIN_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_NEXT_ADMIN_BASE_URL;

const ApiService = axios.create({
    timeout: REQUEST_TIME_OUT,
    baseURL: REQUEST_ADMIN_BASE_URL,
});
let originalConfig = {url: ''};

ApiService.interceptors.request.use(
    async (config) => {
        const session = await getSession();
        config.headers[REQUEST_HEADER_SECRET_KEY] = REQUEST_HEADER_SECRET_VALUE;
        if (!config.headers['Content-Language']) {
            config.headers['Content-Language'] = 'az';
        }
        if (session?.user?.token?.access_token) {
            if (config.headers) config.headers[REQUEST_HEADER_AUTH_KEY] = `${session?.user?.token?.token_type} ${session?.user?.token?.access_token}`;
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
        const session = await getSession()
        originalConfig = error.config || {};

        if (error.response) {
            // Access Token was expired
            if ([401].includes(error.response.status) && !originalConfig._retry) {
                originalConfig._retry = true;
                const refreshToken = session?.user?.token?.refresh_token
                const email = session?.user?.user?.email

                try {
                    const rs = await ApiService.post(
                        '/admin/refresh',
                        {
                            refresh_token: refreshToken,
                            email: email,
                        }
                    );

                    await fetch(`/api/auth/session`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Content-Language': 'az',
                        },
                        body: JSON.stringify({
                            csrfToken: await getCsrfToken(),
                            data: {
                                ...session,
                                user: {
                                    ...session.user,
                                    ...rs.data.data
                                }
                            },
                        }),
                    })

                    return ApiService(originalConfig);
                } catch (_error) {
                    await signOut({
                        redirect: false,
                        callbackUrl: `${REQUEST_NEXT_ADMIN_BASE_URL}/content/idareedici`
                    });
                    return Promise.reject(_error);
                }
            }
            else {
                Object.entries(error.response.data.data).map(([key, value], index) => {
                    toast(
                        <>
                            {error.response.data.message || error.response.statusText}
                            <br/>
                            <ul>
                                {(value || []).map((error, i) => (
                                    <li style={{fontSize: '0.75em'}} key={i}>{i + 1}. {error}</li>
                                ))}
                            </ul>
                        </>,
                        {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            type: "error"
                        }
                    );
                })
            }

            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default ApiService;