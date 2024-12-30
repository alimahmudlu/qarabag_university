import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {log} from "next/dist/server/typescript/utils";
import {changeData} from "@/utils/changeData";
import {useRouter} from "next/router";

export default function SgSectionNewsContentBanner(props) {
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
                        size='sm'
                        header={title}
                    />
                    <SectionBody>
                        <div className='row gap-y-[16px]'>
                            {postList?.[0]?.id ?
                                <div className='col-lg-6'>
                                    <SgNewsItem
                                        staticContent={staticContent}
                                        image={postList?.[0]?.image}
                                        header={postList?.[0]?.title}
                                        path={`/page/${page_id}/${postList?.[0]?.id}`}
                                        date={postList?.[0]?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {})?.date?.value ? moment(postList?.[0]?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {})?.date?.value).locale(locale).format('MMMM DD, YYYY') : null}
                                        time={postList?.[0]?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {})?.date?.value ? moment(postList?.[0]?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {})?.date?.value).locale(locale).format('HH:mm') : null}
                                        ratio={{
                                            width: 588,
                                            height: 419
                                        }}
                                    />
                                </div>
                                : ''
                            }
                            <div className='col-lg-6'>
                                <div className='row gap-y-[16px]'>
                                    {(postList || []).filter((item, index) => index !== 0).map((item, index) => {
                                        const itemContent = item?.post_values.reduce((a, v) => ({
                                            ...a,
                                            [v.meta_key?.alias]: v
                                        }), {});
                                        return (
                                            <div className='col-lg-6' key={index}>
                                                <SgNewsItem
                                                    staticContent={staticContent}
                                                    image={item?.image}
                                                    header={item?.title}
                                                    path={`/page/${page_id}/${item?.id}`}
                                                    size='xs'
                                                    date={itemContent?.date?.value ? moment(itemContent?.date?.value).locale(locale).format('MMMM DD, YYYY') : null}
                                                    time={itemContent?.time?.value? moment(itemContent?.time?.value).locale(locale).format('HH:mm') : null}
                                                    ratio={{
                                                        width: 284,
                                                        height: 137
                                                    }}
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