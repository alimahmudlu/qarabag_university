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
import {ToastContainer} from "react-toastify";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function App({ Component, pageProps: {session, ...pageProps} }) {
    const getLayout = Component.getLayout || ((page) => page)
    const {locale} = useRouter();

    useEffect(() => {

    }, []);

    return (
        <SessionProvider session={session}>
            {getLayout(
                <>
                    <Component {...pageProps} locale={locale}/>
                </>
            )}
            <ToastContainer />
        </SessionProvider>
    )
}