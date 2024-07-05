import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';
import logo from "@/assets/images/logo.svg";
import logoWithText from "@/assets/images/logow.svg";
import SgTemplateFooter from "@/components/templates/Footer";
import SgTemplateHeader from "@/components/templates/Header";
import {useState} from "react";
import {useRouter} from "next/router";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";

export default function SiteLayout(props) {
    const { children, menus } = props;

    const [sidebar, setSidebar] = useState(false)
    const [searchbar, setSearchbar] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

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

    return (
        <>
            <GetGenerateMetadata
                meta={{}}
            />

            <main
                className={[styles['sg--layouts'], styles['sg--layout--site'], sidebar ? styles['sg--layout--site--sidebar'] : ''].join(' ').trim()}>
                <div className={[styles['sg--layout--site-content']].join(' ').trim()}>
                    <SgTemplateHeader
                        logo={logoWithText}
                        menus={{
                            ...menus,
                            languages: [
                                {
                                    title: 'AZ',
                                    path: '/az',
                                    icon: '',
                                },
                                {
                                    title: 'EN',
                                    path: '/en',
                                    icon: '',
                                }
                            ]
                        }}
                        handleSearchbar={handleSearchbar}
                        handleSidebar={handleSidebar}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
                        sidebar={sidebar}
                        searchbar={searchbar}
                        searchQuery={searchQuery}
                    />
                    {children}
                    <SgTemplateFooter
                        menus={[
                            {
                                header: 'Menu',
                                list: [
                                    {
                                        title: 'Haqqımızda',
                                        path: '/about',
                                        icon: ''
                                    },
                                    {
                                        title: 'Akademik fəaliyyət',
                                        path: '/academic_activity',
                                        icon: ''
                                    },
                                    {
                                        title: 'Fakültələr',
                                        path: '/faculties',
                                        icon: ''
                                    },
                                    {
                                        title: 'Kampus',
                                        path: '/campus',
                                        icon: ''
                                    },
                                    {
                                        title: 'Karyera',
                                        path: '/career',
                                        icon: ''
                                    }
                                ]
                            },
                            {
                                header: 'Kömək',
                                list: [
                                    {
                                        title: 'Xəbərlər',
                                        path: '/news',
                                        icon: ''
                                    },
                                    {
                                        title: 'Tədbirlər',
                                        path: '/events',
                                        icon: ''
                                    },
                                    {
                                        title: 'Qaydalar və sənədlər',
                                        path: '/regulations_documents',
                                        icon: ''
                                    }
                                ]
                            },
                            {
                                header: 'Əlaqə',
                                list: [
                                    {
                                        title: 'Lorem ipsum dolor sit amet consectetur. Cras odio at nisl facilisi porttitor est amet.',
                                        path: 'https://maps.app.goo.gl/9QwGFagRk2ZH11SB7',
                                        icon: 'map-pin'
                                    },
                                    {
                                        title: '(+994)55-555-55-55',
                                        path: 'tel::+99455-555-55-55',
                                        icon: 'phone'
                                    },
                                    {
                                        title: '(+994)55-555-55-55',
                                        path: 'tel::+99455-555-55-55',
                                        icon: 'phone'
                                    },
                                    {
                                        title: 'example@gmail.com',
                                        path: 'mailto::example@gmail.com',
                                        icon: 'mail'
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