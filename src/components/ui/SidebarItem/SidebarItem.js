import styles from '@/components/ui/SidebarItem/SidebarItem.module.css'
import Link from "next/link";

export default function SgSidebarItem(props){
    const {name, path, active} = props;

    return(
        <>
            <div className={[styles['sg--sidebarItem'], active ? styles['active'] : ''].join(' ').trim()}>
                <Link href={path} className={[styles['sg--sidebarItem--link']].join(' ').trim()}>
                    {name}
                </Link>
            </div>
        </>
    )
}