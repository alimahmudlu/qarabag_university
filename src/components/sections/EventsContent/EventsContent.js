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
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgSectionEventsContent(props) {
    const {id, data, style, mainData, page_id,staticContent} = props;
    const {image, title, description, filter = true, list = [], morePath} = data;
    const [postList, setPostList] = useState([])

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(mainData?.pagination_limit || 10);
    const [lastPage, setLastPage] = useState(1);

    const [ userFilters, setUserFilters ] = useState({})
    const [ errors, setErrors ] = useState({})
    const router = useRouter();
    const {locale} = router

    function setUserFilterFn(e) {
        changeData(e, userFilters, setUserFilters, errors, setErrors)
    }

    const filterHandle = () => {
        setPage(1)
    }

    function handleChangePage() {
        setPage(page + 1)
    }

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`, {
            params: {
                page: page,
                per_page: perPage,
                ...userFilters,
            },
        }).then((response) => {
            if (page !== 1) {
                setPostList([...postList, ...response.data.data.data])
            }
            else {
                setPostList([...response.data.data.data])
            }
            setLastPage(response.data.data.last_page)
        }).catch((error) => {
            console.log(error)
        })
    }, [page, page_id]);

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                        size='sm'
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
                                            label={<SgHelperTranslate
                                                defaultText={'Axtarış'}
                                                translatedText={staticContent?.eventsFilterContent__search__input}
                                            />}
                                            placeholder='Axtarış'
                                            prefix={<SgIcon icon='search' />}
                                            onChange={setUserFilterFn}
                                            value={userFilters?.post_search}
                                        />
                                    </SgFormGroup>
                                    <SgFormGroup>
                                        <SgInput
                                            color='light'
                                            variant='date'
                                            type='date'
                                            size='small'
                                            name='post_date'
                                            id='post_date'
                                            label={<SgHelperTranslate
                                                defaultText={'Tarix'}
                                                translatedText={staticContent?.eventsFilterContent__date__input}
                                            />}
                                            placeholder={staticContent?.eventsFilterContent__date__input}
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
                                        <SgHelperTranslate
                                            defaultText={'Axtar'}
                                            translatedText={staticContent?.eventsFilterContent__search__button}
                                        />
                                    </SgButton>
                                </div>
                                : ''
                            }
                            <div className={filter ? 'col-lg-9' : 'col-lg-12'}>
                                <div className='row gap-y-[2px]'>
                                    {(postList || []).filter((el, index) => !filter ? index < 3 : el).map((item, index) => {
                                        const itemContent = item?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {});
                                        return (
                                            <div className={'col-lg-12'} key={index}>
                                                <SgEventItem
                                                    title={item?.title}
                                                    path={`/page/${page_id}/${item.id}`}
                                                    date={itemContent?.date?.value}
                                                    staticContent={staticContent}
                                                    additions={[
                                                        {
                                                            icon: 'calendar',
                                                            text: moment(itemContent?.date?.value).locale(locale).format('MMMM DD, YYYY')
                                                        },
                                                        /*{
                                                            icon: 'clock',
                                                            text: itemContent?.time?.value
                                                        },*/
                                                        {
                                                            icon: 'map-pin',
                                                            text: itemContent?.location?.value
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        )
                                    })}
                                    <div className='col-lg-12 flex justify-center pt-[50px]'>
                                        {lastPage > page ?
                                            <SgButton
                                                color='primary-outline'
                                                type={filter ? null : 'link'}
                                                to={morePath}
                                                onClick={handleChangePage}
                                            >
                                                {<SgHelperTranslate
                                                    defaultText={'Daha çox'}
                                                    translatedText={staticContent?.eventsFilterBanner__moreNews__button}
                                                />}
                                            </SgButton>
                                            : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}