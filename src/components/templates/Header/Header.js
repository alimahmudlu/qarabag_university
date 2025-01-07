import styles from "@/components/templates/Header/Header.module.scss"
import Image from "next/image";
import Link from "next/link";
import {SgDropdown} from "@/components/ui/Dropdown";
import {SgIcon} from "@/components/ui/Icon";
import SgMenuItem from "@/components/templates/MenuItem";
import {SgInput} from "@/components/ui/Form";
import {SgButton} from "@/components/ui/Button";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgTemplateHeader(props) {
    const {
        logoW,
        logo,
        menus,
        languages,
        handleSearchbar,
        handleSidebar,
        handleChange,
        handleSearch,
        sidebar,
        searchbar,
        searchQuery,
        handleSetMainLanguage,
        mainLanguage,
        staticContent,
        social
    } = props;


    return (
        <>
            <div className={[styles['sg--template--header'], sidebar ? styles['sg--template--header--sidebar'] : '', searchbar ? styles['sg--template--header--searchbar'] : ''].join(' ').trim()}>
                <div className={[styles['sg--template--header-block']].join(' ').trim()}>
                    <Link href='/' className={[styles['sg--template--header-block-logo']].join(' ').trim()}>
                        <Image width='150' height='150'
                               src={logoW}
                               alt='logo'
                               className={[styles['sg--template--header-block-logo--img']].join(' ').trim()}
                               priority fetchPriority='high'
                        />
                    </Link>
                    <div className={[styles['sg--template--header-block-body']].join(' ').trim()}>
                        <div
                            className={[styles['sg--template--header-block-body-minor'], 'md:px-[32px] lg:px-[82px]'].join(' ').trim()}>
                            <div className={[styles['sg--template--header-block-body-minor-social']].join(' ').trim()}>
                                {(social || []).map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={[styles['sg--template--header-block-body-minor-social-item']].join(' ').trim()}>
                                            <Link href={item.path || ''}
                                                  className={[styles['sg--template--header-block-body-minor-social-item--link']].join(' ').trim()}>
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
                            <div className={[styles['sg--template--header-block-body-minor-menu']].join(' ').trim()}>
                                {((menus || []).find(el => el.alias === 'minorHeader')?.menu_items || []).sort((a, b) => a.row - b.row).map((item, index) => {
                                    return (
                                        item.children ?
                                            <SgDropdown
                                                key={`minor_${index}`}
                                                className={[styles['sg--template--header-block-body-minor-menu-item']].join(' ').trim()}
                                                itemClassName={[styles['sg--template--header-block-body-minor-menu-item-subMenu-item']].join(' ').trim()}
                                                toggleClassName={[styles['sg--template--header-block-body-minor-menu-item--link']].join(' ').trim()}
                                                caret={true}
                                                toggleHeader={item.name}
                                                list={(item?.children || []).map((el, i) => {
                                                    return {
                                                        name: <Link
                                                            href={`/${el?.menu_item_type === 'page' ? 'page' : 'content'}/${el?.url_id}` || '/'}
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
                                                <Link
                                                    href={`/${item?.menu_item_type === 'page' ? 'page' : 'content'}/${item?.url_id}` || '/'}
                                                    className={[styles['sg--template--header-block-body-minor-menu-item--link']].join(' ').trim()}
                                                >
                                                    {item.name}
                                                </Link>
                                            </div>


                                    )
                                })}
                                {(languages || []).length > 1 ?
                                    <SgDropdown
                                        className={[styles['sg--template--header-block-body-minor-menu-item'], 'd-none', 'd-lg-block'].join(' ').trim()}
                                        itemClassName={styles['sg--template--header-block-body-minor-menu-item-subMenu-item']}
                                        toggleClassName={styles['sg--template--header-block-body-minor-menu-item--link']}
                                        caret={true}
                                        toggleHeader={<span
                                            style={{textTransform: 'capitalize'}}>{(languages || [])?.find(el => el.locale === mainLanguage)?.locale}</span>}
                                        list={(languages || []).map((el, i) => {
                                            return {
                                                name: <Link href={el?.locale || '/'}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleSetMainLanguage(el?.locale)
                                                            }}
                                                            key={`lang_${i}`}
                                                            className={[styles['sg--template--header-block-body-minor-menu-item--link'], 'text-capitalize'].join(" ").trim()}>{el?.locale}</Link>,
                                                disabled: false
                                            }
                                        })}
                                    />
                                    : null
                                }

                            </div>
                        </div>
                        <div
                            className={[styles['sg--template--header-block-body-main'], 'md:px-[32px] lg:px-[82px]'].join(' ').trim()}>
                            <Link href='/'
                                  className={[styles['sg--template--header-block-body-main-logo']].join(' ').trim()}>
                                <Image width='1000' height='1000'
                                       src={logo}
                                       alt='logo'
                                       className={[styles['sg--template--header-block-body-main-logo--img']].join(' ').trim()}
                                       priority fetchPriority='high'
                                />
                            </Link>
                            <div className={[styles['sg--template--header-block-body-main-menu']].join(' ').trim()}>
                                {((menus || []).find(el => el.alias === 'header')?.menu_items || []).sort((a, b) => a.row - b.row).map((item, index) => {
                                    return (
                                        <SgMenuItem
                                            key={`main_${index}`}
                                            index={index}
                                            item={item}
                                            className='sg--template--header-block-body-main-menu-item'
                                        />
                                    )
                                })}
                                {/*<div
                                    className={[styles['sg--template--header-block-body-main-menu-item'], 'd-none', 'd-lg-block'].join(' ').trim()}>
                                    <Link href='#'
                                          aria-label='Axtarış'
                                          onClick={handleSearchbar}
                                          className={[styles['sg--template--header-block-body-main-menu-item--link']].join(' ').trim()}
                                    >
                                        <SgIcon icon={searchbar ? 'times' : 'search'}/>
                                    </Link>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                    <div className={[styles['sg--template--header-block-mobile']].join(' ').trim()}>
                        <div className={[styles['sg--template--header-block-mobile-menu']].join(' ').trim()}>
                            {/*{(languages || []).length > 1 ?
                                <SgDropdown
                                    className={[styles['sg--template--header-block-body-minor-menu-item'], 'd-none', 'd-lg-block'].join(' ').trim()}
                                    itemClassName={styles['sg--template--header-block-body-minor-menu-item-subMenu-item']}
                                    toggleClassName={styles['sg--template--header-block-body-minor-menu-item--link']}
                                    caret={true}
                                    toggleHeader={<span
                                        style={{textTransform: 'capitalize'}}>{(languages || [])?.find(el => el.locale === mainLanguage)?.locale}</span>}
                                    list={(languages || []).map((el, i) => {
                                        return {
                                            name: <Link href={el?.locale || '/'}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleSetMainLanguage(el?.locale)
                                                        }}
                                                        key={`lang_${i}`}
                                                        className={styles['sg--template--header-block-body-minor-menu-item--link']}>{el?.locale}</Link>,
                                            disabled: false
                                        }
                                    })}
                                />
                                : null
                            }*/}
                            {(languages || []).length > 1 ?
                                <SgDropdown
                                    className={[styles['sg--template--header-block-mobile-menu-item']].join(' ').trim()}
                                    itemClassName={[styles['sg--template--header-block-mobile-menu-item-subMenu-item']].join(' ').trim()}
                                    toggleClassName={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}
                                    caret={true}
                                    toggleHeader={<span
                                        style={{textTransform: 'capitalize'}}>{(languages || [])?.find(el => el.locale === mainLanguage)?.locale}</span>}
                                    list={(languages || []).map((el, i) => {
                                        return {
                                            name: <Link href={el?.locale || '/'}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleSetMainLanguage(el?.locale)
                                                        }}
                                                        key={`lang_${i}`}
                                                        className={[styles['sg--template--header-block-mobile-menu-item--link'], 'text-capitalize'].join(' ').trim()}>{el?.locale}</Link>,
                                            disabled: false
                                        }
                                    })}
                                />
                                : ''
                            }
                            {/*<div
                                className={[styles['sg--template--header-block-mobile-menu-item']].join(' ').trim()}>
                                <Link href='#'
                                      onClick={handleSearchbar}
                                      className={[styles['sg--template--header-block-mobile-menu-item--link']].join(' ').trim()}
                                >
                                    <SgIcon icon={searchbar ? 'times' : 'search'}/>
                                </Link>
                            </div>*/}
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
                        <div
                            className={[styles['sg--template--header-block-searchBox'], 'd-none', 'd-lg-flex', 'px-[12px] md:px-[32px] lg:px-[82px]'].join(' ').trim()}>
                            <SgInput
                                size='big'
                                labelHidden={true}
                                placeholder={staticContent?.header__search__button}
                                prefix={<SgIcon icon='search'/>}
                                onChange={handleChange}
                                value={searchQuery}
                            />
                            <SgButton
                                color='white-outline'
                                icon='search'
                                size='lg'
                                onClick={handleSearch}
                            >
                                {<SgHelperTranslate
                                    defaultText={'Axtar'}
                                    translatedText={staticContent?.header__search__button}
                                />}
                            </SgButton>
                            <SgButton
                                color='white-outline'
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
                    {searchbar ?
                        <div className={[styles['sg--template--header-block-searchBox'], 'd-flex', 'd-lg-none'].join(' ').trim()}>
                            <SgInput
                                size='extraSmall'
                                labelHidden={true}
                                placeholder={staticContent?.header__search__button}
                                prefix={<SgIcon icon='search' />}
                                onChange={handleChange}
                                value={searchQuery}
                            />
                            <SgButton
                                color='black'
                                icon='search'
                                size='xs'
                                onClick={handleSearch}
                            >
                                {<SgHelperTranslate
                                    defaultText={'Axtar'}
                                    translatedText={staticContent?.header__search__button}
                                />}
                            </SgButton>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </>
    )
}