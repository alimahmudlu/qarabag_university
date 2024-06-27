import styles from "@/components/templates/Footer/Footer.module.scss";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

export default function SgTemplateFooter(props) {
    return (
        <>
            <div className={[styles['sg--template--footer']].join(' ').trim()}>
                <div className='container-lg'>
                    <div className={[styles['sg--template--footer-block']].join(' ').trim()}>
                        <div className={[styles['sg--template--footer-block-main']].join(' ').trim()}>
                            <div className={[styles['sg--template--footer-block-main-logo']].join(' ').trim()}>
                                <Image
                                    src={logo}
                                    alt={'logo'}
                                    className={[styles['sg--template--footer-block-main-logo--img']].join(' ').trim()}
                                />
                            </div>
                            <div className={[styles['sg--template--footer-block-main-menu']].join(' ').trim()}>
                                <div className={[styles['sg--template--footer-block-main-menu-item']].join(' ').trim()}>
                                    <div className={[styles['sg--template--footer-block-main-menu-item']].join(' ').trim()}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}