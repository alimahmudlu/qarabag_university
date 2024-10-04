import styles from "@/components/templates/Footer/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";

export default function SgTemplateFooter(props) {
    const {menus = [], contact=[],logo, copyright, social = []} = props;

    return (
        <>
            <div className={[styles['sg--template--footer']].join(' ').trim()}>
                <div className='container-lg'>
                    <div className={[styles['sg--template--footer-block']].join(' ').trim()}>
                        <div className={[styles['sg--template--footer-block-main']].join(' ').trim()}>
                            <div className={[styles['sg--template--footer-block-main-menu']].join(' ').trim()}>
                                {(menus || []).map((menu, index) => {
                                    return (
                                        <div key={index}
                                             className={[styles['sg--template--footer-block-main-menu-item']].join(' ').trim()}
                                        >
                                            <h6 className={[styles['sg--template--footer-block-main-menu-item--header']].join(' ').trim()}>
                                                {menu.header}
                                            </h6>
                                            <div
                                                className={[styles['sg--template--footer-block-main-menu-item-list']].join(' ').trim()}>
                                                {(menu.list || []).map((item, i) => {
                                                    return (
                                                        <div key={i}
                                                             className={[styles['sg--template--footer-block-main-menu-item-list-item']].join(' ').trim()}
                                                        >
                                                            <Link
                                                                href={item?.menu_item_type ? `/${item?.menu_item_type === 'page' ? 'page' : 'content'}/${item.url_id}` : `${item.url_id}`}
                                                                className={[styles['sg--template--footer-block-main-menu-item-list-item--link']].join(' ').trim()}>
                                                                {item.icon ?
                                                                    <SgIcon icon={item.icon}/>
                                                                    : ''
                                                                }
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={[styles['sg--template--footer-block-middle']].join(' ').trim()}>
                            <div className={[styles['sg--template--footer-block-middle-logo']].join(' ').trim()}>
                                <Image width='1000' height='1000'
                                       src={logo}
                                       alt={'logo'}
                                       className={[styles['sg--template--footer-block-main-logo--img']].join(' ').trim()}
                                />
                            </div>
                            <div className={[styles['sg--template--footer-block-middle-menu']].join(' ').trim()}>
                                {(contact || []).map((menu, index) => {
                                    return (
                                        <div key={index}
                                             className={[styles['sg--template--footer-block-middle-menu-item']].join(' ').trim()}
                                        >
                                            <h2 className={[styles['sg--template--footer-block-middle-menu-item--header']].join(' ').trim()}>
                                                {menu.header}
                                            </h2>
                                            <div
                                                className={[styles['sg--template--footer-block-middle-menu-item-list']].join(' ').trim()}>
                                                {(menu.list || []).map((item, i) => {
                                                    return (
                                                        <div key={i}
                                                             className={[styles['sg--template--footer-block-middle-menu-item-list-item']].join(' ').trim()}
                                                        >
                                                            <Link
                                                                href={item?.menu_item_type ? `/${item?.menu_item_type === 'page' ? 'page' : 'content'}/${item.url_id}` : `${item.url_id}`}
                                                                className={[styles['sg--template--footer-block-middle-menu-item-list-item--link']].join(' ').trim()}>
                                                                {item.icon ?
                                                                    <SgIcon icon={item.icon}/>
                                                                    : ''
                                                                }
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={[styles['sg--template--footer-block-minor']].join(' ').trim()}>
                            <div className={[styles['sg--template--footer-block-minor--copyright']].join(' ').trim()}>
                                {copyright}
                            </div>
                            <div className={[styles['sg--template--footer-block-minor-social']].join(' ').trim()}>
                                {(social || []).map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={[styles['sg--template--footer-block-minor-social-item']].join(' ').trim()}>
                                            <Link href={item.path}
                                                  className={[styles['sg--template--footer-block-minor-social-item--link']].join(' ').trim()}>
                                                {item.icon ?
                                                    <SgIcon icon={item.icon}/>
                                                    : ''
                                                }
                                                <span>{item.title}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}