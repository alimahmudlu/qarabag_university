import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem/NewsSliderItem";
import {SgSlider} from "@/components/ui/Slider";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionNewsBanner(props) {
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
            >
                <SectionBlock>
                    <SectionHead
                        header={'header'}
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
                                Hamısına baxmaq
                            </SgButton>
                        </SgButtonGroup>
                    </SectionHead>
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
                                    return (
                                        <SgNewsSliderItem
                                            key={index}
                                            image={item.image}
                                            header={item.title}
                                            path={`/page/${page_id}/${item?.id}`}
                                            date={item.date}
                                            duration={item.duration}
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