import styles from '@/components/layouts/Layout.module.scss';
import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import authLayoutBG from "@/assets/images/authLayoutBG.png"


export default function AuthLayout(props) {
    const { children } = props;

    return (
        <>
            <main className={[styles['sg--layouts'], styles['sg--layout--auth']].join(' ').trim()}>
                <div className={[styles['sg--layout--auth-content']].join(' ').trim()}>
                    <div className={[styles['sg--layout--auth-content-header']].join(' ').trim()}>
                        <Image src={logo}
                               width={1000}
                               height={1000}
                               alt='logo'
                               className={[styles['sg--layout--auth-content-header--logo']].join(' ').trim()}
                        />
                    </div>
                    <div className={[styles['sg--layout--auth-content-body']].join(' ').trim()}>
                        {children}
                    </div>
                </div>
                <div className={[styles['sg--layout--auth-image']].join(' ').trim()}>
                    <Image src={authLayoutBG}
                           width={10000}
                           height={10000}
                           alt='logo'
                           className={[styles['sg--layout--auth-image--img']].join(' ').trim()}
                   />
                </div>
            </main>
        </>
)
}