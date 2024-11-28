import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";
import SgTable from "@/components/ui/Table";
import {SgIcon} from "@/components/ui/Icon";

export default function SgSectionTableContent(props) {
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

    const tableData = postList?.[0]?.post_values?.map(value => ({
        key: value?.meta_key?.alias,
        name: '',
        value: value.value,
        hidden: false,
        cell: (row, key) =>
            value?.meta_key?.alias === 'downloadLink' ? (
                <a href={value.value}
                   download={encodeURIComponent(encodeURIComponent(value.title))} target="_blank">
                    <SgIcon icon="download"/>
                </a>

            ) : key
    }));

    console.log(postList)

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
                         <SgTable
                             tableData={{
                                 api: `${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`,
                                 data: tableData,
                                 filters: null,
                             }}
                             serverSide={false}

                            onClick={(e, row, index) => {console.log(e, row, index)}}
                         />

                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}