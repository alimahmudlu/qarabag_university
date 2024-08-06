import styles from '@/components/sections/CampusBanner/CampusBanner.module.css';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgCampusItem from "@/components/ui/CampusItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";

export default function SgSectionCampusBanner(props) {
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
    }, [page]);


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
                            <div className='col-lg-5'>
                                <SectionHead
                                    description={description}
                                />
                            </div>
                            <div className='col-lg-7'>
                                {(postList || []).map((item, index) => {
                                    return (
                                        <SgCampusItem
                                            header={item.title}
                                            description={item.content}
                                            path={`/page/${page_id}/${item?.id}`}
                                            key={index}
                                        />
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