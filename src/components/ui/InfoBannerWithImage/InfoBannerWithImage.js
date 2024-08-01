/*
* <SgInfoBannerWithImage
                list={[
                    {
                        id: 1,
                        header: '800+ tələbə',
                        description: 'Lorem ipsum dolor sit amet consectetur. Placerat pretium turpis massa arcu felis felis. Sed sed tincidunt id gravida'
                    },
                    {
                        id: 2,
                        header: '800+ tələbə',
                        description: 'Lorem ipsum dolor sit amet consectetur. Placerat pretium turpis massa arcu felis felis. Sed sed tincidunt id gravida'
                    },
                    {
                        id: 3,
                        header: '800+ tələbə',
                        description: 'Lorem ipsum dolor sit amet consectetur. Placerat pretium turpis massa arcu felis felis. Sed sed tincidunt id gravida'
                    },
                    {
                        id: 4,
                        header: '800+ tələbə',
                        description: 'Lorem ipsum dolor sit amet consectetur. Placerat pretium turpis massa arcu felis felis. Sed sed tincidunt id gravida'
                    },
                ]}
            />
* */

import styles from '@/components/ui/InfoBannerWithImage/InfoBannerWithImage.module.css';
import heroImage from "@/assets/images/hero.png";
import Image from "next/image";

export default function SgInfoBannerWithImage(props) {
    const { list } = props;

    return(
        <>
            <div className={[styles['sg--infoBannerWithImage']].join(' ').trim()}>
                <div className={'container-lg'}>
                    <div className={[styles['sg--infoBannerWithImage-content']].join(' ').trim()}>
                        {
                            (list || []).map((item, index) => {
                                return(
                                    <div key={index} className={[
                                                        styles['sg--infoBannerWithImage-content-item'],
                                                        ((index + 1) % 2 === 1) ? styles['right-border'] : '',
                                        list.length % 2 === 0 ? ((index + 1 < list.length - 1) ? styles['bottom-border'] : '') : ((index + 1 < list.length) ? styles['bottom-border'] : '')
                                    ].join(' ').trim()}
                                    >
                                        <h3 className={[styles['sg--infoBannerWithImage-content-item--header']].join(' ').trim()}>
                                            {item.header}
                                        </h3>
                                        <p className={[styles['sg--infoBannerWithImage-content-item--description']].join(' ').trim()}>
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={[styles['sg--infoBannerWithImage-image']].join(' ').trim()}>
                        <Image src={heroImage} className={[styles['sg--infoBannerWithImage-image']].join(' ').trim()} alt={'image'} />
                    </div>
                </div>
            </div>
        </>
    )
}