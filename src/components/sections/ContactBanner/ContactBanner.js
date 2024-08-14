import {Section, SectionBlock} from "@/components/ui/Section";
import {SgContactBanner} from "@/components/ui/ContactBanner";

export default function SgSectionContactBanner(props) {
    const {id, data, style} = props;
    const {title, description, email,phone} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
                containerType={"container"}
            >
                <SectionBlock>
                    <SgContactBanner

                        header={title}
                        description={description}

                        links={[
                            {
                                name: phone,
                                icon: 'smartphone',
                                type: 'tel'
                            },
                            {
                                name: email,
                                icon: 'mail',
                                type: 'mail'
                            },
                        ]}

                    />
                </SectionBlock>
            </Section>
        </>
    )
}