import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock} from "@/components/ui/Section";

export default function SgSectionAboutUniversityBanner(props) {
    const {id, data} = props;
    const {image, title, description, button = {}} = data;

    return (
        <>
            <Section
                id={id}
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