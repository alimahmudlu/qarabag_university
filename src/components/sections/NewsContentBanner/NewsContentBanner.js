import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {log} from "next/dist/server/typescript/utils";

export default function SgSectionNewsContentBanner(props) {
    const {id, data, style, mainData, page_id} = props;
    const {image, title, description, list = []} = data;
    const [postList, setPostList] = useState([])

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(mainData?.pagination_limit || 10);

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`, {
            params: {
                page: page,
                per_page: perPage,
            },
        }).then((response) => {
            setPostList(response.data.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [page, perPage]);

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
                        <div className='row gap-y-[16px]'>
                            <div className='col-lg-6'>
                                <SgNewsItem
                                    image={postList?.[0]?.image}
                                    header={postList?.[0]?.title}
                                    path={`/page/${page_id}/${postList?.[0]?.id}`}
                                    date={moment(postList?.[0]?.date).format('MMMM DD, YYYY')}
                                    time={moment(postList?.[0]?.date).format('HH:mm')}
                                    ratio={{
                                        width: 588,
                                        height: 419
                                    }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <div className='row gap-y-[16px]'>
                                    {(postList || []).filter((item, index) => index !== 0).map((item, index) => {
                                        const itemContent = item?.post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});
                                        return (
                                            <div className='col-lg-6' key={index}>
                                                <SgNewsItem
                                                    image={item?.image}
                                                    header={item?.title}
                                                    path={`/page/${page_id}/${item?.id}`}
                                                    size='xs'
                                                    date={moment(itemContent?.Date?.value).format('MMMM DD, YYYY')}
                                                    time={moment(itemContent?.Date?.value).format('HH:mm')}
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