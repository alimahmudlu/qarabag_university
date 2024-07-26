import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/styles/globals.scss";
import "@/assets/fonts/sg-icons/style.scss";
import "@/admin/assets/fonts/sg-admin-icons/style.scss";
import "@/admin/components/ui/Form/Input/plugins/imageGallery/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'suneditor/src/assets/css/suneditor.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-nestable/dist/styles/index.css';

import { SessionProvider } from 'next-auth/react';

import ApiService from "@/services/ApiService";
import {ToastContainer} from "react-toastify";
import {SITE_LANGUAGE_LIST_ROUTE, SITE_MENU_TYPE_LIST_ROUTE} from "@/configs/apiRoutes";

Site_App.getInitialProps = async (props) => {
    const initialProps = await App.getInitialProps(props)

    const menus = await ApiService.get(SITE_MENU_TYPE_LIST_ROUTE)
    const languages = await ApiService.get(SITE_LANGUAGE_LIST_ROUTE)

    return {
        ...initialProps,
        menus: menus.data.menus,
        languages: languages.data.data,
    }
}

export default function Site_App({ Component, pageProps: {session, ...pageProps}, menus, languages }) {
    const getLayout = Component.getLayout || ((page) => page)

    if (typeof window !== "undefined" && window && !localStorage.getItem('language')) {
        localStorage.setItem('language', (languages || [])?.find(el => el.main)?.locale)
    }

    return (
        <SessionProvider session={session}>
            {getLayout(
                <>
                    <Component {...pageProps} menus={menus} languages={languages}/>
                </>
                , menus, languages
            )}
            <ToastContainer />
        </SessionProvider>
    )
}