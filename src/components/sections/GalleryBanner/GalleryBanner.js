import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgGalleryList from "@/components/ui/GalleryList";

export default function SgSectionGalleryBanner(props) {
    const {id, data, style} = props;
    const {image, title, description, galleries = []} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
            >
               <SectionBlock>
                   <SectionHead
                       header={title}
                       size='sm'
                       variant='center'
                   />

                   <SectionBody>
                       <SgGalleryList
                           galleries={galleries || []}
                       />
                   </SectionBody>
               </SectionBlock>
            </Section>
        </>
    )
}