import styles from "@/admin/components/templates/Sidebar/Sidebar.module.scss";
import Link from "next/link";
import {SgCollapse} from "@/admin/components/ui/Collapse";
import SgIcon from "@/admin/components/ui/Icon";
import {SgDropdown} from "@/admin/components/ui/Dropdown";

export default function SgSideBarMenuItem(props) {
    const { item, isOpen } = props;

    function menuItemHandleClick(e, item) {
        if (item.children.length > 0) {
            e.preventDefault();


        }
    }

    return (
        <>
            <div className={[styles['sg--template--sidebar-body-menu-item']].join(' ').trim()}>
                {(item.children || []).length > 0 ?
                    <>
                        {!isOpen ?
                            <SgDropdown
                                key={0}
                                direction={'right'}
                                className={[].join(' ').trim()}
                                itemClassName={[].join(' ').trim()}
                                toggleClassName={[styles['sg--template--sidebar-body-menu-item--link']].join(' ').trim()}
                                caret={false}
                                toggleHeader={
                                    <>
                                        <div className={[styles['sg--template--sidebar-body-menu-item--link-icon']].join(' ').trim()}>
                                            {item.icon ? item.icon : <SgIcon icon='menu' />}
                                        </div>
                                        <div className={[styles['sg--template--sidebar-body-menu-item--link-name']].join(' ').trim()}>
                                            {item.name}
                                        </div>
                                    </>
                                }
                                list={(item?.children || []).map((el, i) => {
                                    return {
                                        name: <Link href={item.path}
                                                    key={`main__${i}`}
                                                    className={[].join(' ').trim()}>{el?.name}</Link>,
                                        disabled: false
                                    }
                                })}
                            />
                            :
                            <SgCollapse
                                className={styles['sg--template--sidebar-body-menu-item']}
                                toggleClassName={styles['sg--template--sidebar-body-menu-item--link']}
                                toggleHeader={
                                    <>
                                        <div className={[styles['sg--template--sidebar-body-menu-item--link-icon']].join(' ').trim()}>
                                            {/*{item.icon ? item.icon : (item.name || '').substring(0, 2)}*/}
                                            {item.icon ? item.icon : <SgIcon icon='menu' />}
                                        </div>
                                        <div className={[styles['sg--template--sidebar-body-menu-item--link-name']].join(' ').trim()}>
                                            {item.name}
                                        </div>
                                    </>
                                }
                            >
                                <div className={[styles['sg--template--sidebar-body-menu-item--sub']].join(' ').trim()}>
                                    <div className={[styles['sg--template--sidebar-body-menu']].join(' ').trim()}>
                                        {(item.children || []).map((el, index) =>
                                            <SgSideBarMenuItem
                                                key={index}
                                                item={{...el, path: `/content/idareedici${el.path}`}}
                                            />
                                        )}
                                    </div>
                                </div>
                            </SgCollapse>
                        }
                    </>
                    :
                    <Link href={item.path} className={[styles['sg--template--sidebar-body-menu-item--link']].join(' ').trim()}>
                        <div className={[styles['sg--template--sidebar-body-menu-item--link-icon']].join(' ').trim()}>
                            {item.icon ? item.icon : <SgIcon icon='menu' />}
                        </div>
                        <div className={[styles['sg--template--sidebar-body-menu-item--link-name']].join(' ').trim()}>
                            {item.name}
                        </div>
                    </Link>
                }
            </div>
        </>
    )
}