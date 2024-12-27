import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgCollapse} from "@/components/ui/Collapse";
import styles from "@/components/sections/CollapseContent/CollapseContent.module.scss";

export default function SgSectionCollapseContent( props ) {
    const {id, data, style, mainData, page_id} = props;
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
                        header={title}
                        size='sm'
                    />
                    <SectionBody>
                        <div className='row gap-[24px]'>
                            {(postList || []).map((item, index) => {
                                return (
                                    <div className='col-lg-12' key={index}>
                                        <SgCollapse
                                            toggleHeader={item.title}
                                            id={item.id}
                                            className={[styles['sg--section--collapseContent-item']].join(' ').trim()}
                                            openClassName={[styles['sg--section--collapseContent-item--open']].join(' ').trim()}
                                            toggleClassName={[styles[`sg--section--collapseContent-item--link`]].join(' ').trim()}
                                            menuClassName={[styles[`sg--section--collapseContent-item--content`]].join(' ').trim()}
                                        >
                                            <div dangerouslySetInnerHTML={{__html: item?.content}} />
                                        </SgCollapse>
                                    </div>
                                )
                            })}
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}