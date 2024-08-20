import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";
import ApiService from "@/services/ApiService";
import {SITE_PAGE_CHILDREN_PAGES_LIST_ROUTE, SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgCollapse} from "@/components/ui/Collapse";
import styles from "@/components/sections/CollapseContent/CollapseContent.module.scss";
import GetPage from "@/pages/page/[page_id]";
import SgTemplateGetPageWidgets from "@/components/templates/GetPageWidgets/GetPageWidgets";
import SgTabItem from "@/components/ui/TabItem";
import {useRouter} from "next/router";

export default function SgSectionTabContent( props ) {
    const {id, data, style, mainData, page_id} = props;
    const {image, title, description, filter = true, list = [], morePath} = data;
    const [postList, setPostList] = useState([])
    const [pageList, setPageList] = useState([])

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

    useEffect(() => {
        ApiService.get(`${SITE_PAGE_CHILDREN_PAGES_LIST_ROUTE}/${page_id}/parent`).then(response => {
            setPageList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);


    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                    />
                    <SectionBody>
                        <div className='row'>
                            <div className='col-lg-4'>
                                {(pageList || []).map((item, index) => {
                                    return (
                                        <SgTabItem
                                            key={index}
                                            path={`#tabContent--${index}--${item.id}`}
                                            title={item.title}
                                        />
                                    )
                                })}
                            </div>
                            <div className='col-lg-8'>
                                {(pageList || []).map((item, index) => {
                                    return (
                                        <div key={index} id={`tabContent--${index}--${item.id}`}>
                                            <SgTemplateGetPageWidgets
                                                page_widgets={item?.page_widgets}
                                                page_id={page_id}
                                                firstSectionPadding={true}
                                                key={index}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}