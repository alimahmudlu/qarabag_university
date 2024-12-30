import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgEventsList from "@/components/ui/EventsList";
import EventImage from "@/assets/images/eventImage.png"
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgSectionEventsBanner(props) {
    const {id, data, mainData, page_id,staticContent} = props;
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
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                        filter={true}
                        size='sm'
                    >
                        {page_id === 1 ?
                            <SgButtonGroup>
                                <SgButton
                                    color='primary-outline'
                                    icon='arrow-up-right'
                                    animations={{
                                        icon: [
                                            {
                                                type: 'hover',
                                                value: 'rotate-45'
                                            }
                                        ]
                                    }}
                                    size='sm'
                                    withOutBlock={true}
                                    reverse={true}
                                    type='link'
                                    to={`/page/${page_id}`}
                                    decoration='underline'
                                >
                                    <SgHelperTranslate
                                    defaultText={'Hamısına baxmaq'}
                                    translatedText={staticContent?.EventsBannerList__allSee__button}
                                    />

                                </SgButton>
                            </SgButtonGroup>
                            : null
                        }
                    </SectionHead>
                    <SectionBody>
                        <SgEventsList
                            staticContent={staticContent}
                            list={postList}
                            image={image}
                            page_id={page_id}
                            text='Tədbirlər'
                        />
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}