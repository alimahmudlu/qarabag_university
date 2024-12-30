import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem/NewsSliderItem";
import {SgSlider} from "@/components/ui/Slider";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgSectionNewsBanner(props) {
    const {id, data, style, mainData, page_id, org_page_id, staticContent} = props;
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
                        size='sm'
                        filter={true}
                    >
                        {Number(org_page_id) === 1 ?
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
                        <div className='row'>
                            <div className='col-lg-12'>
                                {(postList || []).length > 0?
                                    <SgSlider
                                        withOutOverflow={false}
                                        arrow={true}
                                        sliderSettings={{
                                            "slidesToShow": 2,
                                            "slidesToScroll": 1,

                                            autoplay: true,
                                            speed: 300,
                                            autoplaySpeed: 5000,
                                            cssEase: "linear",
                                            pauseOnHover: true,

                                            infinite: true,
                                            arrows: false,
                                            dots: false,
                                            responsive:[
                                                {
                                                    breakpoint: 992,
                                                    settings:
                                                        {
                                                            slidesToShow: 1,
                                                            slidesToScroll: 1
                                                        }
                                                }
                                            ]
                                        }}
                                        items={(postList || []).map((item, index) => {
                                            const itemContent = item?.post_values.reduce((a, v) => ({
                                                ...a,
                                                [v.meta_key?.alias]: v
                                            }), {});
                                            return (
                                                <SgNewsSliderItem
                                                    key={index}
                                                    image={item.image}
                                                    header={item.title}
                                                    path={`/page/${page_id}/${item?.id}`}
                                                    date={itemContent?.date?.value}
                                                    duration={itemContent?.time?.value}
                                                />
                                            )
                                        })}
                                    /> : ''
                                }
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}