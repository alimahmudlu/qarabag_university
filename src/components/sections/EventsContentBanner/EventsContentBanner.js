import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {SgSlider} from "@/components/ui/Slider";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem";
import SgEventsSliderItem from "@/components/ui/EventsSliderItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionEventsContentBanner(props) {
    const {id, data, style, mainData, page_id} = props;
    const {image, title, description, list = []} = data;
    const [postList, setPostList] = useState([])

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`).then((response) => {
            setPostList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

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
                                                date={moment(item?.date).format('MMMM DD, YYYY')}
                                                time={moment(item?.date).format('HH:mm')}
                                                location={item?.location}
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