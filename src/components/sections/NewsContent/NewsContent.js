import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {SgFormGroup, SgInput} from "@/components/ui/Form";
import {SgIcon} from "@/components/ui/Icon";
import {SgButton} from "@/components/ui/Button";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgSectionNewsContent(props) {
    const {id, data, style, mainData, page_id,staticContent} = props;
    const {image, title, description, filter = true, list = [], morePath} = data;
    const [postList, setPostList] = useState([])

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(mainData?.pagination_limit || 10);
    const [lastPage, setLastPage] = useState(1);

    const [ userFilters, setUserFilters ] = useState({})
    const [ errors, setErrors ] = useState({})

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
                        variant={'center'}
                        header={title}
                        size='sm'
                    />
                    <SectionBody>
                        <div className='row lg:gap-y-[50px] gap-y-[20px]'>
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
                                                translatedText={staticContent?.newsFilterBanner__search__input}
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
                                        <SgHelperTranslate
                                            defaultText={'Axtar'}
                                            translatedText={staticContent?.newsFilterContent__search__button
                                            }
                                        />
                                    </SgButton>
                                </div>
                                : ''
                            }
                            <div className={filter ? 'col-lg-9' : 'col-lg-12'}>
                                <div className='row lg:gap-y-[50px] gap-y-[20px]'>
                                    {(postList || []).filter((el, index) => !filter ? index < 3 : el).map((item, index) => {
                                        const itemContent = item?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {});
                                        return (
                                            <div className={'col-lg-4 col-6 lg:px-[12px] px-[10px]'} key={index}>
                                                <SgNewsItem
                                                    image={item?.image}
                                                    header={item?.title}
                                                    path={`/page/${page_id}/${item?.id}`}
                                                    date={moment(itemContent?.date?.value).format('MMMM DD, YYYY')}
                                                    time={moment(itemContent?.time?.value).format('HH:mm')}
                                                    ratio={{
                                                        width: 284,
                                                        height: 137
                                                    }}
                                                />
                                            </div>
                                        )
                                    })}
                                    <div className='col-lg-12 flex justify-center'>
                                        {lastPage > page ?
                                            <SgButton
                                                color='primary'
                                                type={filter ? null : 'link'}
                                                to={morePath}
                                                onClick={handleChangePage}
                                            >
                                                <SgHelperTranslate
                                                    defaultText={'Daha çox'}
                                                    translatedText={staticContent?.newsFilterBanner__moreNews__button}
                                                />
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