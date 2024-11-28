import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgSlider} from "@/components/ui/Slider";
import SgPosterItem from "@/components/ui/PosterItem";

export default function SgSectionMonumentsFamousBanner(props) {
    const {id, data, style} = props;
    const {image, title, description, list = []} = data;

    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                        variant="center"
                        size='sm'
                    />
                    <SectionBody>
                        <div className='row gap-y-[48px]'>
                            {(list || []).map((item, index) => {
                                return (
                                    <div className='col-lg-12' key={index}>
                                        <SgSlider
                                            withOutOverflow={true}
                                            arrow={false}
                                            sliderSettings={{
                                                "slidesToShow": 4,
                                                "slidesToScroll": 1,

                                                autoplay: true,
                                                autoplaySpeed: 0,
                                                speed: 4000,
                                                rtl: index % 2 === 1,

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
                                            items={(item || []).map((el, index) =>
                                                <SgPosterItem
                                                    key={index}
                                                    title={el?.title}
                                                    description={el?.description}
                                                    image={el?.image}
                                                />
                                            )}
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