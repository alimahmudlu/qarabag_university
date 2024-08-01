import styles from '@/admin/components/sections/Auth/Auth.module.scss';
import Link from "next/link";

export default function SgSectionAuth(props) {
    const { header, description, children } = props;

    return (
        <>
            <div className={[styles['sg--section--auth']].join(' ').trim()}>
                <div className={[styles['sg--section--auth-head']].join(' ').trim()}>
                    <Link href='/sign-in' className={[styles['sg--section--auth-head-logo']].join(' ').trim()}>
                        <div className={[styles['sg--section--auth-head-logo--image']].join(' ').trim()}>
                            SG
                        </div>
                        <div className={[styles['sg--section--auth-head-logo--header']].join(' ').trim()}>
                            AdminPanel
                        </div>
                    </Link>
                    <h3 className={[styles['sg--section--auth-head--header']].join(' ').trim()}>
                        {header}
                    </h3>
                    <p className={[styles['sg--section--auth-head--description']].join(' ').trim()}>
                        {description}
                    </p>
                </div>
                <div className={[styles['sg--section--auth-body']].join(' ').trim()}>
                    {children}
                </div>
            </div>
        </>
    )
}