import styles from '@/components/ui/PosterItem/PosterItem.module.scss';
import {SgRatio} from "@/components/ui/Ratio";
import Image from "next/image";

export default function SgPosterItem(props) {
    const {title, description, image} = props;

    return (
        <>
            <div className={[styles['sg--posterItem']].join(' ').trim()}>
                <div className={[styles['sg--posterItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={{
                            width: 2,
                            height: 3,
                        }}
                    >
                        <div className={[styles['sg--posterItem-head-image']].join(' ').trim()}>
                            <Image
                                src={image}
                                alt={title}
                                className={[styles['sg--posterItem-head-image--img']].join(' ').trim()}
                            />
                        </div>
                    </SgRatio>
                </div>
                <div className={[styles['sg--posterItem-body']].join(' ').trim()}>
                    {title ?
                        <h6 className={[styles['sg--posterItem-body--header']].join(' ').trim()}>
                            {title}
                        </h6>
                        : ''
                    }
                    {description ?
                        <span className={[styles['sg--posterItem-body--description']].join(' ').trim()}>
                        {description}
                    </span>
                    : ''
                    }
                </div>
            </div>
        </>
    )
}