import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";

export default function SgSectionContentBanner(props) {
    const {id, data, style} = props;
    const {image, title, description, button = {}} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SgContentBanner
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