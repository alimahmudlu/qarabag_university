import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem/NewsSliderItem";
import SgPosterItem from "@/components/ui/PosterItem";
import {SgSlider} from "@/components/ui/Slider";

export default function SgSectionNewsBanner(props) {
    const {id, data, header} = props;

    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={header}
                        filter={true}
                    >
                        <SgButtonGroup>
                            <SgButton
                                color='primary-outline'
                                icon='arrow-up-right'
                                size='sm'
                                withOutBlock={true}
                                reverse={true}
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
                                items={(data || []).map((item, index) => {
                                    return (
                                        <SgNewsSliderItem
                                            key={index}
                                            image={item.image}
                                            header={item.header}
                                            path={item.path}
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