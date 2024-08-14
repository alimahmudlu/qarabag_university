import SgContent from "@/components/ui/Content";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import {useEffect, useRef, useState} from "react";

export default function SgSectionContent(props) {
    const {id, data, style} = props;
    const {image, title, description, button = {}} = data;
    return (
        <>
            <Section
                id={id}
                style={style}
                containerType={"container"}
            >
                <SectionBlock>
                    <SgContent
                        image={image}
                        title={title}
                        description={description}
                        button={button}
                    />
                </SectionBlock>
            </Section>
        </>
    )
}