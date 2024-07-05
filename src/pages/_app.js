import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/styles/globals.scss";
import "@/assets/fonts/sg-icons/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ApiService from "@/services/ApiService";

Site_App.getInitialProps = async (props) => {
    const initialProps = await App.getInitialProps(props)

    const menus = await ApiService.get('http://localhost:3000/api/menu/getAll')

    return {
        ...initialProps,
        menus: menus.data.menus
    }
}

export default function Site_App({ Component, pageProps: {session, ...pageProps}, menus }) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        getLayout(
            <>
                <Component {...pageProps} menus={menus}/>
            </>
            , menus
        )
    )
}