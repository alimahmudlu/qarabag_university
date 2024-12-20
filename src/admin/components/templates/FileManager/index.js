import React, {useEffect, useRef} from 'react';
import {FILE_MANAGER_ROUTE, FILE_MANAGER_UPLOAD_ROUTE} from "@/admin/configs/apiRoutes";
import {Jodit} from "jodit-pro-react";
import {useSession} from "next-auth/react";


export default function Index() {
    const containerRef = useRef(null);
    const REQUEST_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_ADMIN_BASE_URL;
    const REQUEST_HEADER_AUTH_KEY = process.env.NEXT_PUBLIC_REQUEST_HEADER_AUTH_KEY;
    const {data: session} = useSession();
    const defaultConfig = {
        ajax: {
            url: `${REQUEST_BASE_URL}${FILE_MANAGER_ROUTE}`,
            headers: {
                "Content-Language": "az",
                "Signature": "KarabakhIsAzerbaijan",
                [REQUEST_HEADER_AUTH_KEY]: `${session?.user?.token?.token_type} ${session?.user?.token?.access_token}`
            }
        },
        uploader: {
            url: `${REQUEST_BASE_URL}${FILE_MANAGER_UPLOAD_ROUTE}?action=fileUpload`,
            headers: {
                "Content-Language": "az",
                "Signature": "KarabakhIsAzerbaijan",
                [REQUEST_HEADER_AUTH_KEY]: `${session?.user?.token?.token_type} ${session?.user?.token?.access_token}`
            }
        },
        selectMode: 'single',
        events: {

        },
        license: "5AA22-12GF1-B2L6J-28ANZ",
        fullsize: true,
        isFullSize: true,
        language: 'az',
        removeButtons: ['close'], // Kapatma düğmesini kaldır
        width: '100%', // Genişlik
        height: '100%', // Yükseklik
    };

    const fileBrowser = new Jodit.modules.FileBrowserPro({
        container: containerRef.current,
        ...defaultConfig,
    });

    useEffect(() => {
        fileBrowser.open((files) => {

        }, true);
    }, []);

    return (
        <div>
            File Manager
        </div>
    );
};