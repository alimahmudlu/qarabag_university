import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';
import logo from "@/assets/images/logo.svg";
import logoWithText from "@/assets/images/logoColorful.svg";
import logowWithText from "@/assets/images/logow.svg";
import SgTemplateFooter from "@/components/templates/Footer";
import SgTemplateHeader from "@/components/templates/Header";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";
import SgTemplateScrollToTop from "@/components/templates/ScrollToTop";
import { GoogleAnalytics } from '@next/third-parties/google'
import SgHelperTranslate from "@/components/helper/Translate";

export default function SiteLayout(props) {
    const { children, menus, languages, settings, locale,staticContent } = props;

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
        router.push(
            {
                pathname: router.pathname,
                query: router.query,
            },
            null,
            { locale: language }
        )

        localStorage.setItem('language', language)
    }

    useEffect(() => {
        setSearchbar(false)
        setSidebar(false)
    }, [router])

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
                        logo={((settings || {})?.meta || []).find(el => el.meta === 'logo_green')?.value ? ((settings || {})?.meta || []).find(el => el.meta === 'logo_green')?.value : logo}
                        logoW={((settings || {})?.meta || []).find(el => el.meta === 'logo_white')?.value ? ((settings || {})?.meta || []).find(el => el.meta === 'logo_white')?.value : logo}
                        menus={menus}
                        social={((settings || {})?.social_media || []).map(el => ({
                            title: el?.title,
                            path: el?.value,
                            icon: el?.meta
                        }))}
                        languages={languages}
                        handleSearchbar={handleSearchbar}
                        handleSidebar={handleSidebar}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
                        sidebar={sidebar}
                        searchbar={searchbar}
                        searchQuery={searchQuery}
                        handleSetMainLanguage={handleSetMainLanguage}
                        mainLanguage={locale}
                        staticContent={staticContent}
                    />
                    <div>
                        {children}
                    </div>
                    <SgTemplateFooter
                        menus={((menus || []).find(el => el.alias === 'footer')?.menu_items || []).map(el => ({
                            header: el.name,
                            list: el?.children,
                        }))}
                        contact={[
                            {
                                header: <SgHelperTranslate
                                    defaultText={'Əlaqə'}
                                    translatedText={staticContent?.footer__contact__text}
                                />,
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
                        logo={((settings || {})?.meta || []).find(el => el.meta === 'logo_white')?.value ? ((settings || {})?.meta || []).find(el => el.meta === 'logo_white')?.value : logo}
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