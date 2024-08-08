import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';
import logo from "@/assets/images/logo.svg";
import logoWithText from "@/assets/images/logow.svg";
import SgTemplateFooter from "@/components/templates/Footer";
import SgTemplateHeader from "@/components/templates/Header";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";

export default function SiteLayout(props) {
    const { children, menus, languages } = props;

    const [sidebar, setSidebar] = useState(false)
    const [searchbar, setSearchbar] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [mainLanguage, setMainLanguage] = useState('')

    const router = useRouter()

    function handleSearchbar(e) {
        e.preventDefault();

        setSearchbar(!searchbar)
        setSidebar(false)
    }


    function handleSidebar(e) {
        e.preventDefault();

        setSidebar(!sidebar)
        setSearchbar(false)
    }

    function handleChange(e) {
        setSearchQuery(e.target.value)
    }

    function handleSearch() {
        router.push({
            pathname: '/search',
            query: { search: searchQuery },
        }, undefined, { scroll: true });
        setSearchbar(false)
        setSearchQuery('')
    }

    function handleSetMainLanguage(language, reload = true) {
        localStorage.setItem('language', language)
        setMainLanguage(language)
        router.reload()
    }

    useEffect(() => {
        if (localStorage.getItem('language')) {
            setMainLanguage(localStorage.getItem('language'))
        }
        else {
            handleSetMainLanguage(languages?.find(el => el.main).locale, false)
        }
    }, []);

    return (
        <>
            <main
                className={[styles['sg--layouts'], styles['sg--layout--site'], sidebar ? styles['sg--layout--site--sidebar'] : ''].join(' ').trim()}>
                <div className={[styles['sg--layout--site-content']].join(' ').trim()}>
                    <SgTemplateHeader
                        logo={logoWithText}
                        menus={menus}
                        languages={languages}
                        handleSearchbar={handleSearchbar}
                        handleSidebar={handleSidebar}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
                        sidebar={sidebar}
                        searchbar={searchbar}
                        searchQuery={searchQuery}
                        handleSetMainLanguage={handleSetMainLanguage}
                        mainLanguage={mainLanguage}
                    />
                    {children}
                    <SgTemplateFooter
                        menus={((menus || []).find(el => el.alias === 'header')?.menu_items || []).map(el => ({
                            header: el.name,
                            list: el?.children,
                        }))}
                        contact={[
                            {
                                header: 'Əlaqə',
                                list: [
                                    {
                                        name: 'Lorem ipsum dolor sit amet consectetu',
                                        url_id: 'https://maps.app.goo.gl/9QwGFagRk2ZH11SB7',
                                        icon: 'map-pin'
                                    },
                                    {
                                        name: 'example@gmail.com',
                                        url_id: 'mailto::example@gmail.com',
                                        icon: 'mail'
                                    },
                                    {
                                        name: '(+994)55-555-55-55',
                                        url_id: 'tel::+99455-555-55-55',
                                        icon: 'phone'
                                    },
                                    {
                                        name: '(+994)55-555-55-55',
                                        url_id: 'tel::+99455-555-55-55',
                                        icon: 'phone'
                                    }
                                ]
                            }
                        ]}
                        logo={logo}
                        copyright='Lorem ipsum dolor sit amet consectetur. Cras odio at nisl facilisi porttitor est amet.'
                        social={[
                            {
                                title: 'Facebook',
                                path: 'https://www.facebook.com/',
                                icon: 'facebook'
                            },
                            {
                                title: 'Instagram',
                                path: 'https://www.instagram.com/',
                                icon: 'instagram'
                            },
                            {
                                title: 'Whatsapp',
                                path: 'https://www.whatsapp.com/',
                                icon: 'whatsapp'
                            },
                            {
                                title: 'Telegram',
                                path: 'https://www.telegram.com/',
                                icon: 'telegram'
                            },
                            {
                                title: 'Linkedin',
                                path: 'https://www.linkedin.com/in/',
                                icon: 'linkedin'
                            },
                        ]}
                    />
                </div>
            </main>
        </>
    );
}