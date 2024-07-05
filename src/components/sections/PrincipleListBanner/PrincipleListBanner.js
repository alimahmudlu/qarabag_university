import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgPrincipleList from "@/components/ui/PrincipleList";

export default function SgSectionPrincipleListBanner(props) {
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
                        <SgPrincipleList
                            data={list || []}
                        />
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}