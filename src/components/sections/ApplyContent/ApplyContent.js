import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import SgApplyContent from "@/components/ui/ApplyContent";

export default function SgSectionApplyContent(props) {
    const {id, data, style, reverse} = props;
    const {title, applyTitle,applyDescription,description, button = {}} = data;

    return (
        <>

            <Section
                id={id}
                style={style}

            >
                <SectionBlock>
                    <SgApplyContent
                        reverse={reverse}
                        applyTitle={applyTitle}
                        applyDescription={applyDescription}
                        title={title}
                        description={description}
                        button={button}
                    />
                </SectionBlock>
            </Section>
        </>
    )
}