import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import {useEffect, useRef, useState} from "react";

export default function SgSectionContentBanner(props) {
    const {id, data, style, fluidContainer, reverse} = props;
    const {image, title, description, button = {}} = data;
    const containerRef = useRef(null);

    const useWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined"

        function getWindowDimensions() {
            const width = hasWindow ? window.innerWidth : null
            const height = hasWindow ? window.innerHeight : null
            const containerOffset = containerRef.current?.offsetWidth
            return {
                width,
                height,
                containerOffset: (width - containerOffset) / 2
            }
        }

        const [windowDimensions, setWindowDimensions] = useState(
            getWindowDimensions()
        )

        useEffect(() => {
            if (hasWindow && fluidContainer) {
                console.log(containerRef.current?.offsetWidth)
                function handleResize() {
                    setWindowDimensions(getWindowDimensions())
                }

                handleResize();

                window.addEventListener("resize", handleResize)
                return () => window.removeEventListener("resize", handleResize)
            }
        }, [hasWindow, fluidContainer])


        return windowDimensions
    }


    const { containerOffset } = useWindowDimensions()

    return (
        <>
            {fluidContainer ? <div ref={containerRef} className='container-lg'></div> : '' }
            <Section
                id={id}
                style={style}
                containerType={!fluidContainer ? "container" : "fluid"}
            >
                <SectionBlock>
                    <SgContentBanner
                        reverse={reverse}
                        image={image}
                        title={title}
                        description={description}
                        button={button}
                        fluidContainer={fluidContainer}
                        fluidContainerPadding={containerOffset}
                    />
                </SectionBlock>
            </Section>
        </>
    )
}