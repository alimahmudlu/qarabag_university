import styles from '@/components/ui/NewsItem/NewsItem.module.scss';
import Image from "next/image";
import { SgButton } from '../Button';
import { SgRatio } from '../Ratio';

export default function SgNewsItem(props) {
    const { header, description,date,time, image, path,ratio } = props;

    return (
        <>
            <div className={[styles['sg--newsItem']].join(' ').trim()}>
                <div className={[styles['sg--newsItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={{
                            width: ratio?.width,
                            height: ratio?.height,
                        }}
                    >
                        <div className={[styles['sg--newsItem-head-image']].join(' ').trim()}>
                            <Image
                                src={image}
                                alt={header}
                                className={[styles['sg--newsItem-head-image--img']].join(' ').trim()}
                            />
                        </div>
                    </SgRatio>
                </div>
                <div className={[styles['sg--newsItem-body']].join(' ').trim()}>
                    {
                        date ? 
                        <ul className={[styles['sg--newsItem-body--date']].join(' ').trim()}>
                            <li>{date}</li>
                            <li>{time}</li>
                        </ul>
                        :''
                    }
                    {header ?
                        <h6 className={[styles['sg--newsItem-body--header']].join(' ').trim()}>
                            {header}
                        </h6>
                        : ''
                    }
                    {description ?
                        <p className={[styles['sg--newsItem-body--description']].join(' ').trim()}>
                            {description}
                        </p>
                        : ''
                    }

                    <SgButton
                        type='link'
                        to={path}
                        color='black-outline'
                        withOutBlock={true}
                        icon={'arrow-up-right'}
                        reverse={true}
                    >
                        Daha ətraflı
                    </SgButton>




                </div>
            </div>
        </>
    )
}