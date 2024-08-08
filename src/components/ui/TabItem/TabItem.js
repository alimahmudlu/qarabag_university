import styles from './TabItem.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";

export default function SgTabItem(props) {
    const {path, title} = props;
    const router = useRouter();

    return (
        <>
            <div className={[styles['sg--tabItem'], (router.asPath.split('#').length > 1 && router.asPath.split('#')[1] === path.split('#')[1]) ? styles['sg--tabItem--active'] : (router.asPath === path ? styles['sg--tabItem--active'] : '')].join(' ').trim()}>
                <Link href={path} className={[styles['sg--tabItem--link']].join(' ').trim()}>
                    {title}
                </Link>
            </div>
        </>
    )
}