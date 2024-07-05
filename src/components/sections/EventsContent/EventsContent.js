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

export default function SgSectionEventsContent(props) {
    const {id, data, style} = props;
    const {image, title, description, filter = false, list = []} = data;

    const { query } = useRouter()
    const router = useRouter()
    const [ userFilters, setUserFilters ] = useState({})
    const [ errors, setErrors ] = useState({})

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
                                    {(list || []).map((item, index) => {
                                        return (
                                            <div className={'col-lg-12'} key={index}>
                                                <SgEventItem
                                                    title={item?.title}
                                                    path={item?.path}
                                                    date={moment(item?.date).format('MMMM DD, YYYY')}
                                                    additions={[
                                                        {
                                                            icon: 'calendar',
                                                            text: moment(item.date).format('MMMM DD, YYYY')
                                                        },
                                                        {
                                                            icon: 'clock',
                                                            text: moment(item.date).format('HH:mm')
                                                        },
                                                        {
                                                            icon: 'map-pin',
                                                            text: item?.location
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