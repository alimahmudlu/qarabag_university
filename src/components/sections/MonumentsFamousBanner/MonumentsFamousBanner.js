import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgSlider} from "@/components/ui/Slider";
import SgPosterItem from "@/components/ui/PosterItem";

export default function SgSectionMonumentsFamousBanner(props) {
    const {id, header, data = []} = props;

    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={header}
                        variant="center"
                    />
                    <SectionBody>
                        <div className='row gap-y-[48px]'>
                            <div className='col-lg-12'>
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
                                    items={(data || []).map((item, index) =>
                                        <SgPosterItem
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
                                        />
                                    )}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <SgSlider
                                    withOutOverflow={true}
                                    arrow={false}
                                    sliderSettings={{
                                        "slidesToShow": 4,
                                        "slidesToScroll": 1,

                                        autoplay: true,
                                        autoplaySpeed: 0,
                                        speed: 4000,
                                        rtl: true,


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
                                    items={(data || []).map((item, index) =>
                                        <SgPosterItem
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
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