import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/styles/globals.scss";
import "@/assets/fonts/sg-icons/style.css";

Site_App.getInitialProps = async (props) => {
  const initialProps = await App.getInitialProps(props)

  return {...initialProps}
}

export default function Site_App({ Component, pageProps: {session, ...pageProps}, configuration }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
        getLayout(
            <>
              <Component {...pageProps} configuration={configuration}/>
            </>, configuration
        )
  )
}