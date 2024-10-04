import styles from '@/components/sections/ClubsBanner/ClubsBanner.module.scss';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgClubItem from "@/components/ui/ClubItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgSectionClubsBanner(props) {
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
                style={{
                    backgroundColor: 'var(--background, #F6F6F6)'
                }}
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                        filter={true}
                    >
                        <SgButtonGroup>
                            <SgButton
                                color='primary-outline'
                                icon='arrow-up-right'
                                size='sm'
                                withOutBlock={true}
                                reverse={true}
                                type='link'
                                to={`/page/${page_id}`}
                            >
                                <SgHelperTranslate
                                    defaultText={'Hamısına baxmaq'}
                                    translatedText={staticContent?.clubsBanner__allSee__button}
                                />
                            </SgButton>
                        </SgButtonGroup>
                    </SectionHead>
                    <SectionBody>
                        <div className='row gap-y-[20px]'>
                            {(postList || []).map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-4'>
                                        <SgClubItem
                                            image={item.image}
                                            header={item.title}
                                            description={item.short_description}
                                            path={`/page/${page_id}/${item?.id}`}
                                        />
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