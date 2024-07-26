import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import Fancybox from "@/components/templates/Fancybox/Fancybox";
import Image from "next/image";

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
                       variant='center'
                   />

                   <SectionBody>
                       <Fancybox
                           options={{
                               Carousel: {
                                   infinite: false
                               }
                           }}
                       >
                           <div className='row gap-y-[50px]'>
                               {(galleries || []).map((item, index) => {
                                   return (
                                       <div className='col-lg-4' key={index}>
                                           <a data-fancybox="gallery" href={item.image}>
                                               <Image width='1000' height='1000'
                                                   alt={item.title}
                                                   src={item.image}
                                               />
                                           </a>
                                       </div>
                                   )
                               })}
                           </div>
                       </Fancybox>
                   </SectionBody>
               </SectionBlock>
            </Section>
        </>
    )
}