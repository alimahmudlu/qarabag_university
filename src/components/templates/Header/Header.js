import styles from "@/components/templates/Header/Header.module.scss"
import Image from "next/image";
import Link from "next/link";
import {SgDropdown} from "@/components/ui/Dropdown";
import {SgIcon} from "@/components/ui/Icon";
import {useRouter} from "next/router";
import {useState} from "react";
import SgMenuItem from "@/components/templates/MenuItem";
import {SgInput} from "@/components/ui/Form";
import {SgButton} from "@/components/ui/Button";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";

export default function SgTemplateHeader(props) {
    const {
        logo,
        menus,
        handleSearchbar,
        handleSidebar,
        handleChange,
        handleSearch,
        sidebar,
        searchbar,
        searchQuery
    } = props;


    return (
        <>
            <div className={[styles['sg--template--header'], sidebar ? styles['sg--template--header--sidebar'] : '', searchbar ? styles['sg--template--header--searchbar'] : ''].join(' ').trim()}>
                <div className='container-fluid'>
                    <div className={[styles['sg--template--header-block']].join(' ').trim()}>
                        <Link href='/' className={[styles['sg--template--header-block-logo']].join(' ').trim()}>
                            <Image
                                src={logo}
                                alt='logo'
                                className={[styles['sg--template--header-block-logo--img']].join(' ').trim()}
                                priority fetchPriority='high'
                            />
                        </Link>
                        <div className={[styles['sg--template--header-block-body']].join(' ').trim()}>
                            <div className={[styles['sg--template--header-block-body-minor']].join(' ').trim()}>
                                <div
                                    className={[styles['sg--template--header-block-body-minor-menu']].join(' ').trim()}>
                                    {(menus.minor || []).map((item, index) => {
                                        return (
                                            item.children ?
                                                <SgDropdown
                                                    key={`minor_${index}`}
                                                    className={[styles['sg--template--header-block-body-minor-menu-item']].join(' ').trim()}
                                                    itemClassName={[styles['sg--template--header-block-body-minor-menu-item-subMenu-item']].join(' ').trim()}
                                                    toggleClassName={[styles['sg--template--header-block-body-minor-menu-item--link']].join(' ').trim()}
                                                    caret={true}
                                                    toggleHeader={item.title}
                                                    list={(item?.children || []).map((el, i) => {
                                                        return {
                                                            name: <Link href={el?.slug || '/'}
                                                                        key={`minor_${index}_${i}`}
                                                                        className={[styles['sg--template--header-block-body-minor-menu-item--link']].join(' ').trim()}>{el?.title}</Link>,
                                                            disabled: false
                                                        }
                                                    })}
                                                />
                                                :
                                                <div key={`minor_${index}`}
                                                     className={[styles['sg--template--header-block-body-minor-menu-item']].join(' ').trim()}
                                                >
                                                    <Link href={item.slug || '/'}
                                                          className={[styles['sg--template--header-block-body-minor-menu-item--link']].join(' ').trim()}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </div>


                                        )
                                    })}
                                    <SgDropdown
                                        className={[styles['sg--template--header-block-body-minor-menu-item'], 'd-none', 'd-lg-block'].join(' ').trim()}
                                        itemClassName={styles['sg--template--header-block-body-minor-menu-item-subMenu-item']}
                                        toggleClassName={styles['sg--template--header-block-body-minor-menu-item--link']}
                                        caret={true}
                                        toggleHeader={'AZ'}
                                        list={(menus?.languages || []).map((el, i) => {
                                            return {
                                                name: <Link href={el?.slug || '/'}
                                                            key={`lang_${i}`}
                                                            className={styles['sg--template--header-block-body-minor-menu-item--link']}>{el?.title}</Link>,
                                                disabled: false
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            <div className={[styles['sg--template--header-block-body-main']].join(' ').trim()}>
                                <div className={[styles['sg--template--header-block-body-main-menu']].join(' ').trim()}>
                                    {(menus.main || []).map((item, index) => {
                                        return (
                                            <SgMenuItem
                                                key={`main_${index}`}
                                                index={index}
                                                item={item}
                                                className='sg--template--header-block-body-main-menu-item'
                                            />
                                        )
                                    })}
                                    <div
                                        className={[styles['sg--template--header-block-body-main-menu-item'], 'd-none', 'd-lg-block'].join(' ').trim()}>
                                        <Link href='#'
                                              onClick={handleSearchbar}
                                              className={[styles['sg--template--header-block-body-main-menu-item--link']].join(' ').trim()}
                                        >
                                            <SgIcon icon={searchbar ? 'times' : 'search'}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles['sg--template--header-block-mobile']].join(' ').trim()}>
                            <div className={[styles['sg--template--header-block-mobile-menu']].join(' ').trim()}>
                                <SgDropdown
                                    className={[styles['sg--template--header-block-mobile-menu-item']].join(' ').trim()}
                                    itemClassName={[styles['sg--template--header-block-mobile-menu-item-subMenu-item']].join(' ').trim()}
                                    toggleClassName={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}
                                    caret={true}
                                    toggleHeader={'AZ'}
                                    list={(menus?.languages || []).map((el, i) => {
                                        return {
                                            name: <Link href={el?.path || '/'}
                                                        key={`lang_${i}`}
                                                        className={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}>{el?.title}</Link>,
                                            disabled: false
                                        }
                                    })}
                                />
                                <div
                                    className={[styles['sg--template--header-block-mobile-menu-item']].join(' ').trim()}>
                                    <Link href='#'
                                          onClick={handleSearchbar}
                                          className={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}
                                    >
                                        <SgIcon icon={searchbar ? 'times' : 'search'}/>
                                    </Link>
                                </div>
                                <div
                                    className={[styles['sg--template--header-block-mobile-menu-item'], 'd-block', 'd-lg-none'].join(' ').trim()}>
                                    <Link href='#'
                                          onClick={handleSidebar}
                                          className={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}
                                    >
                                        <SgIcon icon={sidebar ? 'times' : 'menu'}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {searchbar ?
                            <div className={[styles['sg--template--header-block-searchBox']].join(' ').trim()}>
                                <SgInput
                                    size='big'
                                    labelHidden={true}
                                    placeholder='Axtar...'
                                    prefix={<SgIcon icon='search'/>}
                                    onChange={handleChange}
                                    value={searchQuery}
                                />
                                <SgButton
                                    color='primary'
                                    icon='search'
                                    size='lg'
                                    onClick={handleSearch}
                                >
                                    Axtar
                                </SgButton>
                                <SgButton
                                    color='primary'
                                    icon='times'
                                    onlyIcon={true}
                                    squared={true}
                                    size='lg'
                                    onClick={handleSearchbar}
                                >
                                    Close
                                </SgButton>
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}