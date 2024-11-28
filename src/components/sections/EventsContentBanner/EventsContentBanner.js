import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {SgSlider} from "@/components/ui/Slider";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem";
import SgEventsSliderItem from "@/components/ui/EventsSliderItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";

export default function SgSectionEventsContentBanner(props) {
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
                        <div className='row'>
                            <div className='col-lg-12'>
                                <SgSlider
                                    withOutOverflow={true}
                                    arrow={true}
                                    sliderSettings={{
                                        "slidesToShow": 2,
                                        "slidesToScroll": 1,

                                        infinite: false,
                                        arrows: false,
                                        dots: false,
                                        responsive: [
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
                                        const itemContent = item?.post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});
                                        return (
                                            <SgEventsSliderItem
                                                key={index}
                                                header={item?.title}
                                                image={item?.image}
                                                ratio={
                                                    {
                                                        width: 473,
                                                        height: 268
                                                    }
                                                }
                                                date={moment(itemContent?.date?.value).format('MMMM DD, YYYY')}
                                                time={itemContent?.time?.value}
                                                location={itemContent?.location?.value}
                                                path={`/page/${page_id}/${item?.id}`}
                                            />
                                        )
                                    })}
                                />
                            </div>

                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}