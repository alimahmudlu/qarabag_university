import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {SgFormGroup, SgInput} from "@/components/ui/Form";
import {SgIcon} from "@/components/ui/Icon";
import {SgButton} from "@/components/ui/Button";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";
import SgEventItem from "@/components/ui/EventItem";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionEventsContent(props) {
    const {id, data, style, mainData, page_id} = props;
    const {image, title, description, filter = true, list = []} = data;

    const { query } = useRouter()
    const router = useRouter()
    const [ userFilters, setUserFilters ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [postList, setPostList] = useState([])

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`).then((response) => {
            setPostList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    function setUserFilterFn(e) {
        changeData(e, userFilters, setUserFilters, errors, setErrors)
    }

    const filterHandle = () => {
        Object.keys(userFilters).map(el => {
            router.query[el] = userFilters[el]
        })

        router.push({
            pathname: router.pathname,
            query: { ...router.query },
        }, undefined, { scroll: false });
    }

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

    function removeFilter(key, value) {
        if (key === 'categories[]') {
            changeForm({
                target: {
                    id: 'categories[]',
                    name: 'categories[]',
                    type: 'checkbox',
                    checked: false,
                    value: value,
                    dataset: {
                        variant: 'array'
                    }
                }
            }, userFilters, setUserFilters, errors, setErrors)
        }
        else if (key === 'all') {
            setUserFilters({
                ...userFilters,
                'categories[]': [],
                search: ''
            })
        }
        else {
            changeForm({
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

    useEffect(() => {
        const initialData = {}
        const newQuery = {...initialData, ...query}
        delete newQuery.page

        let modifiedQuery = {}
        for (const [name, value] of Object.entries(newQuery)) {
            modifiedQuery[name] = getModifiedQuery(name, value)
        }

        setUserFilters({...userFilters, ...newQuery, ...modifiedQuery})
    }, []);

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                    />
                    <SectionBody>
                        <div className='row gap-y-[50px]'>
                            {filter ?
                                <div className='col-lg-3'>
                                    <SgFormGroup>
                                        <SgInput
                                            color='light'
                                            size='small'
                                            name='post_search'
                                            id='post_search'
                                            label='Axtarış'
                                            placeholder='Axtarış'
                                            prefix={<SgIcon icon='search' />}
                                            onChange={setUserFilterFn}
                                            value={userFilters?.post_search}
                                        />
                                    </SgFormGroup>
                                    <SgFormGroup>
                                        <SgInput
                                            color='light'
                                            variant='select'
                                            size='small'
                                            name='post_category'
                                            id='post_category'
                                            label='Kateqoriya'
                                            placeholder='Kateqoriya'
                                            onChange={setUserFilterFn}
                                            value={userFilters?.post_category}
                                        />
                                    </SgFormGroup>
                                    <SgFormGroup>
                                        <SgInput
                                            color='light'
                                            variant='date'
                                            size='small'
                                            name='post_date'
                                            id='post_date'
                                            label='GG/AA/YYYY'
                                            placeholder='GG/AA/YYYY'
                                            dateFormat='DD-MM-YYYY'
                                            onChange={setUserFilterFn}
                                            value={userFilters?.post_date}
                                        />
                                    </SgFormGroup>

                                    <SgButton
                                        color='primary'
                                        block={true}
                                        onClick={filterHandle}
                                    >
                                        Axtar
                                    </SgButton>
                                </div>
                                : ''
                            }
                            <div className={filter ? 'col-lg-9' : 'col-lg-12'}>
                                <div className='row gap-y-[2px]'>
                                    {(postList || []).map((item, index) => {
                                        const itemContent = item?.post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});
                                        return (
                                            <div className={'col-lg-12'} key={index}>
                                                <SgEventItem
                                                    title={item?.title}
                                                    path={`/page/${page_id}/${item.id}`}
                                                    date={moment(item?.date).format('MMMM DD, YYYY')}
                                                    additions={[
                                                        {
                                                            icon: 'calendar',
                                                            text: moment(itemContent?.date?.value).format('MMMM DD, YYYY')
                                                        },
                                                        {
                                                            icon: 'clock',
                                                            text: itemContent?.Time?.value
                                                        },
                                                        {
                                                            icon: 'map-pin',
                                                            text: itemContent?.location?.value
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}