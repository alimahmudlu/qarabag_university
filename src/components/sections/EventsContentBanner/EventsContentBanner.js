import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";
import {SgSlider} from "@/components/ui/Slider";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem";
import SgEventsSliderItem from "@/components/ui/EventsSliderItem";

export default function SgSectionEventsContentBanner(props) {
    const {id, data, style} = props;
    const {image, title, description, list = []} = data;

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
                                    items={(list || []).map((item, index) => {
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
                                                path={item?.path}
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