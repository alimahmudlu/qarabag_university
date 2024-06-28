import styles from '@/components/ui/SpeakersItem/SpeakersItem.module.scss';
import Image from "next/image";
import { SgRatio } from '../Ratio';

export default function SgSpeakersItem(props) {
    const { header, position, image, path } = props;

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