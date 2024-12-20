import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/fonts/fonts.scss";
import "@/assets/styles/globals.scss";

import "@/assets/fonts/sg-icons/style.scss";
import "@/admin/assets/fonts/sg-admin-icons/style.scss";

import "react-datetime/css/react-datetime.css";

import "@/admin/components/ui/Form/Input/plugins/imageGallery/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-nestable/dist/styles/index.css';

import { SessionProvider } from 'next-auth/react';
import az from "moment/locale/az"

import ApiService from "@/services/ApiService";
import {ToastContainer} from "react-toastify";
import {
    SITE_LANGUAGE_LIST_ROUTE,
    SITE_MENU_TYPE_LIST_ROUTE,
    SITE_SETTINGS_LIST_WITH_TYPES_ROUTE, SITE_STATIC_CONTENTS_ROUTE
} from "@/configs/apiRoutes";
import {appWithTranslation} from "next-i18next";
import {GoogleAnalytics} from "@next/third-parties/google";

Site_App.getInitialProps = async (props) => {
    const initialProps = await App.getInitialProps(props)

    const locale = props.ctx?.locale
    const defaultLocale = props.ctx?.defaultLocale

    try {
        function generateNestable(array) {
            const ids = array.map((x) => x.id);
            const result = array.map((parent) => {
                const children = array.filter((child) => {
                    if (child.id !== child.parent?.id && child.parent?.id === parent.id) {
                        return true;
                    }

                    return false;
                });

                if (children.length) {
                    parent.children = children;
                }

                return parent;
            }).filter((obj) => {
                if (obj.id === obj.parent?.id || !ids.includes(obj.parent?.id)) {
                    return true;
                }

                return false;
            });

            return result
        }

        const menus = await ApiService.get(SITE_MENU_TYPE_LIST_ROUTE, {headers: {
            "Content-Language": locale || 'az'
            }});
        const newMenu = (menus.data.data || []).map((item) => ({...item, menu_items: generateNestable(item?.menu_items)}));
        const languages = await ApiService.get(SITE_LANGUAGE_LIST_ROUTE, {headers: {
            "Content-Language": locale || 'az'
            }});
        const settings = await ApiService.get(SITE_SETTINGS_LIST_WITH_TYPES_ROUTE, {headers: {
            "Content-Language": locale || 'az'
            }})
        const staticContent = await ApiService.get(SITE_STATIC_CONTENTS_ROUTE, {headers: {
            "Content-Language": locale || 'az'
            }});

        return {
            ...initialProps,
            menus: newMenu,
            languages: languages.data.data,
            settings: settings.data.data,
            staticContent: staticContent.data.data,
            locale
        }
    }
    catch (error) {
        return {
            ...initialProps,
            menus: [],
            languages: [],
            settings: [],
            staticContent: {},
            locale
        }
    }
}

function Site_App({ Component, pageProps: {session, ...pageProps}, menus, languages, settings, locale, staticContent }) {
    const getLayout = Component.getLayout || ((page) => page)

    if (typeof window !== "undefined" && window && window.localStorage) {
        localStorage.setItem('language', locale)
    }

    return (
        <SessionProvider session={session}>
            {getLayout(
                <>
                    <Component {...pageProps} menus={menus} languages={languages} settings={settings} locale={locale} staticContent={staticContent} />
                    {/*<GoogleAnalytics gaId="G-E5VK6Q1Z41" />*/}
                </>
                , menus, languages, settings, locale, staticContent
            )}
            <ToastContainer />
        </SessionProvider>
    )
}

export default appWithTranslation(Site_App)