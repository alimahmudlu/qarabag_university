import Fancybox from "@/components/templates/Fancybox/Fancybox";
import Image from "next/image";
import {SgRatio} from "@/components/ui/Ratio";
import styles from "@/components/ui/GalleryList/GalleryList.module.scss";

export default function SgGalleryList(props) {
    const {galleries} = props;

    return (
        <>
           <Fancybox
               options={{
                   Carousel: {
                       infinite: false
                   }
               }}
           >
               <div className={['row gap-y-[50px]', styles['sg--galleryList']].join(' ').trim()}>
                   {(galleries || []).map((item, index) => {
                       return (
                           <div className={['col-lg-4', styles['sg--galleryList-item']].join(' ').trim()} key={index}>
                               <a data-fancybox="gallery" href={item}>
                                   <SgRatio
                                       ratio={{
                                           width: 1,
                                           height: 1,
                                       }}
                                   >
                                       <Image width='1000' height='1000'
                                              alt={item.title}
                                              src={item}
                                              className={[styles['sg--galleryList-item--img']].join(' ').trim()}
                                       />
                                   </SgRatio>
                               </a>
                           </div>
                       )
                   })}
               </div>
           </Fancybox>
        </>
    )
}