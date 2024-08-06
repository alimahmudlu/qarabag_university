import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgSlider} from "@/components/ui/Slider";
import SgPosterItem from "@/components/ui/PosterItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {changeData} from "@/utils/changeData";

export default function SgSectionMonumentsFamousBannerList(props) {
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
                        variant="center"
                    />
                    <SectionBody>
                        <div className='row gap-y-[48px]'>
                            {(list || []).map((item, index) => {
                                return (
                                    <></>
                                )
                            })}

                            <div className='col-lg-12' key={0}>
                                <SgSlider
                                    withOutOverflow={true}
                                    arrow={false}
                                    sliderSettings={{
                                        "slidesToShow": 4,
                                        "slidesToScroll": 1,

                                        autoplay: true,
                                        autoplaySpeed: 0,
                                        speed: 4000,

                                        draggable: false,
                                        swipe: false,
                                        focusOnSelect: false,
                                        accessibility: false,
                                        touchMove: false,
                                        pauseOnHover: false,
                                        pauseOnFocus: false,
                                        pauseOnSwipe: false,
                                        cssEase: 'linear',

                                        infinite: true,
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
                                    items={(postList || []).map((el, index) =>
                                        <SgPosterItem
                                            key={index}
                                            title={el?.title}
                                            description={el?.content}
                                            image={el?.image}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}