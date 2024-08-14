import {Section, SectionBlock} from "@/components/ui/Section";
import {SgComment} from "@/components/ui/Comment";

export default function SgSectionComment(props) {
    const {id, data, style} = props;
    const {image, name, description, position} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
                containerType={"container"}
            >
                <SectionBlock>
                    <SgComment
                        image={image}
                        description={description}
                        fullName={name}
                        position={position}
                    />
                </SectionBlock>
            </Section>
        </>
    )
}