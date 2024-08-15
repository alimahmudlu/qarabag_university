import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';
import logo from "@/assets/images/logo.svg";
import logoWithText from "@/assets/images/logow.svg";
import SgTemplateFooter from "@/components/templates/Footer";
import SgTemplateHeader from "@/components/templates/Header";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";

export default function SiteLayout(props) {
    const { children, menus, languages, settings } = props;

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
            <GetGenerateMetadata
                defaultMetas={{
                    title: ((settings || {})?.meta || []).find(el => el.meta === 'title')?.title,
                    description: ((settings || {})?.meta || []).find(el => el.meta === 'description')?.title,
                }}
            />
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
                        menus={((menus || []).find(el => el.alias === 'footer')?.menu_items || []).map(el => ({
                            header: el.name,
                            list: el?.children,
                        }))}
                        contact={[
                            {
                                header: 'Əlaqə',
                                list: [
                                    ...((settings || {})?.address || []).map(el => ({
                                        name: el?.title,
                                        url_id: el?.value,
                                        icon: el?.meta
                                    })),
                                    ...((settings || {})?.email || []).map(el => ({
                                        name: el?.title,
                                        url_id: `mailto::${el?.value}`,
                                        icon: el?.meta
                                    })),
                                    ...((settings || {})?.phone || []).map(el => ({
                                        name: el?.title,
                                        url_id: `tel::${el?.value}`,
                                        icon: el?.meta
                                    }))
                                ]
                            }
                        ]}
                        logo={logo}
                        copyright={((settings || {})?.meta || []).find(el => el.meta === 'copyright')?.title}
                        social={((settings || {})?.social_media || []).map(el => ({
                            title: el?.title,
                            path: el?.value,
                            icon: el?.meta
                        }))}
                    />
                </div>
            </main>
        </>
    );
}