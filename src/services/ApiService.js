import axios from 'axios';
// import {useSession, signOut, getCsrfToken, getSession} from "next-auth/react";

const REQUEST_HEADER_AUTH_KEY = process.env.NEXT_PUBLIC_REQUEST_HEADER_AUTH_KEY;
const REQUEST_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_BASE_URL;
const REQUEST_TOKEN_TYPE = process.env.NEXT_PUBLIC_REQUEST_TOKEN_TYPE;
// const REQUEST_ACCESS_TOKEN = process.env.NEXT_PUBLIC_REQUEST_ACCESS_TOKEN;
const REQUEST_ACCESS_TOKEN = process.env.NEXT_PUBLIC_REQUEST_ACCESS_TOKEN;
const REQUEST_TIME_OUT = process.env.NEXT_PUBLIC_REQUEST_TIME_OUT;
const REQUEST_UNAUTHORIZED_CODE = process.env.NEXT_PUBLIC_REQUEST_UNAUTHORIZED_CODE;

const ApiService = axios.create({
    timeout: REQUEST_TIME_OUT,
    baseURL: REQUEST_BASE_URL,
});
let originalConfig = {url: ''};

ApiService.interceptors.request.use(
    async (config) => {
        // const session = await getSession()
        // if (session?.user?.accessToken) {
        //     if (config.headers) config.headers[REQUEST_HEADER_AUTH_KEY] = `${REQUEST_TOKEN_TYPE}${session?.user?.accessToken}`;
        // }
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
        // const session = await getSession()
        originalConfig = error.config || {};

        if (error.response) {
            // // Access Token was expired
            // if (REQUEST_UNAUTHORIZED_CODE.includes(error.response.status) && !originalConfig._retry) {
            //     originalConfig._retry = true;
            //     const refreshToken = session?.user?.refreshToken
            //     // const email = session?.user?.email
            //
            //     // try {
            //     //     const rs = await ApiService.post(
            //     //         '/authenticate/refresh',
            //     //         {
            //     //             refreshToken: refreshToken,
            //     //             email: email,
            //     //         }
            //     //     );
            //     //
            //     //     await fetch(`/api/auth/session`, {
            //     //         method: 'POST',
            //     //         headers: {
            //     //             'content-type': 'application/json',
            //     //         },
            //     //         body: JSON.stringify({
            //     //             csrfToken: await getCsrfToken(),
            //     //             data: {
            //     //                 ...session,
            //     //                 user: {
            //     //                     ...session.user,
            //     //                     ...rs.data.data
            //     //                 }
            //     //             },
            //     //         }),
            //     //     })
            //     //
            //     //     return ApiService(originalConfig);
            //     // } catch (_error) {
            //     //     await signOut();
            //     //     return Promise.reject(_error);
            //     // }
            // }

            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default ApiService;