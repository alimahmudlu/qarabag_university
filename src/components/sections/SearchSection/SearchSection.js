import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import styles from "./SearchSection.module.scss";
import SgHelperTranslate from "@/components/helper/Translate";
import {SgInput} from "@/components/ui/Form";
import {SgIcon} from "@/components/ui/Icon";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {changeData} from "@/utils/changeData";
import ApiService from "@/services/ApiService";
import {SEARCH_CONTENTS_ROUTE, SITE_PAGE_SHOW_ROUTE} from "@/configs/apiRoutes";
import Link from "next/link";

export default function SgSectionSearchSection(props) {
    const {searchData, staticContent} = props;
    const router = useRouter()
    const { query } = useRouter()
    const [ userFilters, setUserFilters ] = useState({})
    const [ errors, setErrors ] = useState({})

    function handleChange(e) {
        changeData(e, userFilters, setUserFilters, errors, setErrors)
    }

    useEffect(() => {
        if (Object.keys(userFilters).length > 0) {
            Object.keys(userFilters).map(el => {
                router.query[el] = userFilters[el]
            })

            router.push({
                pathname: router.pathname,
                query: { ...router.query },
            }, undefined, { scroll: false });
        }
    }, [userFilters]);

    /**
     * @param {string} name
     * @param {string|Array} value
     * @returns {string|Array}
     */
    function getModifiedQuery(name, value) {
        if (!name.includes('[]')) {
            return value
        }

        if (typeof value === 'string') {
            return [value]
        } else if (Array.isArray(value)) {
            return value
        }

        return []
    }

    useEffect(() => {
        const newQuery = {...query}
        delete newQuery.page

        let modifiedQuery = {}
        for (const [name, value] of Object.entries(newQuery)) {
            modifiedQuery[name] = getModifiedQuery(name, value)
        }

        setUserFilters({...userFilters, ...newQuery, ...modifiedQuery})
    }, []);


    function removeFilter(key) {
        if (key === 'all') {
            setUserFilters({
                ...userFilters,
                'categories[]': [],
                search: ''
            })
        }
        else {
            changeData({
                target: {
                    id: 'search',
                    name: 'search',
                    type: 'text',
                    checked: false,
                    value: '',
                    dataset: {}
                }
            }, userFilters, setUserFilters, errors, setErrors)
        }
    }


    return (
        <>
            <Section>
                <SectionBlock>
                    <SectionBody>
                        <div className={[styles['sg--section--searchSection']].join(' ').trim()}>
                            <div className={[styles['sg--section--searchSection-head']].join(' ').trim()}>
                                <div className={[styles['sg--section--searchSection-head--header']].join(' ').trim()}>
                                    <SgHelperTranslate
                                        defaultText={'Axtar'}
                                        translatedText={staticContent?.searchSection__header__title}
                                    />
                                </div>
                                <div className={[styles['sg--section--searchSection-head-searchBox']].join(' ').trim()}>
                                    <SgInput
                                        id='search'
                                        name='search'
                                        size='big'
                                        labelHidden={true}
                                        placeholder={staticContent?.header__search__button}
                                        prefix={<SgIcon icon='search'/>}
                                        suffix={userFilters?.search ? <span onClick={() => removeFilter()}><SgIcon icon='times'/></span> : ''}
                                        onChange={handleChange}
                                        value={userFilters?.search || ""}
                                    />
                                </div>
                            </div>
                            <div className={[styles['sg--section--searchSection-operations']].join(' ').trim()}>
                                <div
                                    className={[styles['sg--section--searchSection-operations--count']].join(' ').trim()}>
                                    <SgHelperTranslate
                                        defaultText={'Təxmini nəticə: '}
                                        translatedText={staticContent?.searchSection__header__title}
                                    /> {(searchData || []).length }
                                </div>
                                <div
                                    className={[styles['sg--section--searchSection-operations--sort']].join(' ').trim()}>

                                </div>
                            </div>
                            <div className={[styles['sg--section--searchSection-body']].join(' ').trim()}>
                                <div className={[styles['sg--section--searchSection-body-items']].join(' ').trim()}>
                                    {(searchData || []).map((item, index) => (
                                        <div key={index} className={[styles['sg--section--searchSection-body-items-item']].join(' ').trim()}>
                                            <Link href={`/page/${item.id}`} className={[styles['sg--section--searchSection-body-items-item--title']].join(' ').trim()}>
                                                {item?.title}
                                            </Link>
                                            <div className={[styles['sg--section--searchSection-body-items-item--description']].join(' ').trim()}
                                                 dangerouslySetInnerHTML={{ __html: item?.content }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}