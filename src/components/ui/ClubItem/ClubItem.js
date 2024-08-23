import styles from '@/components/ui/ClubItem/ClubItem.module.scss';
import {SgRatio} from "@/components/ui/Ratio";
import Image from "next/image";
import Link from "next/link";
import {SgButton} from "@/components/ui/Button";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgClubItem(props) {
    const {header, image, description, path, staticContent} = props;

    return (
        <>
            <div className={[styles['sg--clubItem']].join(' ').trim()}>
                <SgRatio
                    ratio={{
                        width: 1,
                        height: 1,
                    }}
                >
                    <div className={[styles['sg--clubItem-block']].join(' ').trim()}>
                        <div className={[styles['sg--clubItem-block-image']].join(' ').trim()}>
                            <Image
                                src={image || ''}
                                alt={header}
                                width={1000}
                                height={1000}
                                className={[styles['sg--clubItem-block-image--img']].join(' ').trim()}
                            />
                        </div>
                        <div className={[styles['sg--clubItem-block-body']].join(' ').trim()}>
                            <h4 className={[styles['sg--clubItem-block-body--header']].join(' ').trim()}>
                                {header}
                            </h4>
                            <div className={[styles['sg--clubItem-block-body-block']].join(' ').trim()}>
                                <p className={[styles['sg--clubItem-block-body-block--description']].join(' ').trim()}>
                                    {description}
                                </p>

                                <SgButton
                                    className='mt-auto'
                                    type='link'
                                    to={path}
                                    color='white-outline'
                                    withOutBlock={true}
                                    icon={'arrow-up-right'}
                                    reverse={true}
                                    size='md:lg sm:sm'
                                >
                                    <SgHelperTranslate
                                        defaultText={'Daha ətraflı'}
                                        translatedText={staticContent?.newsCard__more__link}
                                    />
                                </SgButton>
                            </div>
                        </div>
                    </div>
                </SgRatio>
            </div>
        </>
    )
}