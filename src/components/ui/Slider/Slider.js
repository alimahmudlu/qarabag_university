import Slider from "react-slick";
import styles from "@/components/ui/Slider/Slider.module.scss";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import {createRef} from "react";

export default function SgSlider(props) {
    const { items, sliderSettings, withOutOverflow, arrow = false } = props;

    const SliderRef = createRef();

    const gotoNextSlider = () => {
        SliderRef.current.slickNext()
    }

    const gotoPrevSlider = () => {
        SliderRef.current.slickPrev()
    }

    return (
        <>
            <Slider {...sliderSettings}
                    ref={SliderRef}
                    className={[styles['widget-slider-container-items'], withOutOverflow ? styles['widget-slider-container-items--withOutOverflow'] : ''].join(' ').trim()}
            >
                {(items || []).map((el, index) =>
                    <div key={index} className={styles['widget-slider-container-item']}>
                        {el}
                    </div>
                )}
            </Slider>

            {arrow ?
                <SgButtonGroup
                    className='justify-content-end mt-[40px]'
                    gap={true}
                >
                    <SgButton
                        icon='arrow-left'
                        color='black-outline'
                        onlyIcon={true}
                        squared={true}
                        variant='rounded'
                        onClick={gotoPrevSlider}
                    >
                        Prev slider
                    </SgButton>
                    <SgButton
                        icon='arrow-right'
                        color='black-outline'
                        onlyIcon={true}
                        squared={true}
                        variant='rounded'
                        onClick={gotoNextSlider}
                    >
                        Next slider
                    </SgButton>
                </SgButtonGroup>
                : ''
            }
        </>
    )
}