
import styles from '@/components/ui/SpeakersItem/SpeakersItem.module.scss';
import Image from "next/image";
import { SgButton } from '../Button';
import { SgRatio } from '../Ratio';

{/* 
    <SgSpeakersItem
        image={speakersItemImg}
        header='Azər Bayramov'
        position='Köməkçi müəllim'
        media={[
            {
                title:'facebook',
                icon: 'facebook_fill',
                path: '#'
            },
            {
                title:'skype',
                icon: 'skype_fill',
                path: '#'
            },
            {
                title:'instagram',
                icon: 'instagram',
                path:'#'
            }
        ]}
    />
*/}

export default function SgSpeakersItem(props) {
    const { header, position, image, path, media } = props;

    return (
        <>
            <div className={[styles['sg--speakersItem']].join(' ').trim()}>
                <div className={[styles['sg--speakersItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={{
                            width: 1,
                            height: 1,
                        }}
                    >
                        <div className={[styles['sg--speakersItem-head-image']].join(' ').trim()}>
                            <Image
                                src={image}
                                alt={header}
                                className={[styles['sg--speakersItem-head-image--img']].join(' ').trim()}
                            />
                        </div>
                    </SgRatio>

                    <ul className={[styles['sg--speakersItem-head--media']].join(' ').trim()}>
                        {
                            media?.map((item, index) => (
                                <li key={index}>
                                    <SgButton
                                        icon={item.icon}
                                        variant='rounded'
                                        color='black-outline'
                                        onlyIcon={true}
                                        squared={true}
                                        type='link'
                                        size='xs'
                                        href={item.path}
                                    >
                                        Instagram
                                    </SgButton>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={[styles['sg--speakersItem-body']].join(' ').trim()}>
                    {header ?
                        <h6 className={[styles['sg--speakersItem-body--header']].join(' ').trim()}>
                            {header}
                        </h6>
                        : ''
                    }
                    {position ?
                        <p className={[styles['sg--speakersItem-body--position']].join(' ').trim()}>
                            {position}
                        </p>
                        : ''
                    }
                </div>
            </div>
        </>
    )
}