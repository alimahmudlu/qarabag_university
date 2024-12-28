import styles from './TabItem.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {scrollToSection} from "@/utils/scrollToSection";

export default function SgTabItem(props) {
    const {path, title, hash} = props;
    const router = useRouter();


    return (
        <>
            <div className={[styles['sg--tabItem'], (router.asPath.split('#').length > 1 && router.asPath.split('#')[1] === path.split('#')[1]) ? styles['sg--tabItem--active'] : (router.asPath === path ? styles['sg--tabItem--active'] : '')].join(' ').trim()}>
                <Link href={path || '#'} onClick={(e) => {
                    scrollToSection(path.split('#')[1])
                }} className={[styles['sg--tabItem--link']].join(' ').trim()}>
                    {title}
                </Link>
            </div>
        </>
    )
}