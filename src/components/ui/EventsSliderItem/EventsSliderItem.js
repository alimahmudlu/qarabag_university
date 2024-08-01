import styles from '@/components/ui/EventsSliderItem/EventsSliderItem.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { SgRatio } from '../Ratio';

{/* <SgEventsSliderItem
    image={clubImage}
    header='Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib'
    ratio={
        {
            width: 473,
            height: 268
        }
    }
    date='Aprel 21, 2024'
    time='11:30-12:30'
    location='Bakı şəhəri'
    path='#'
/> */}

export default function SgEventsSliderItem(props) {
    const { header, location, description, date, time, image, path, ratio } = props;

    return (
        <>
            <div className={[styles['sg--eventsSliderItem']].join(' ').trim()}>

                <div className={[styles['sg--eventsSliderItem-body']].join(' ').trim()}>
                    {header ?
                        <Link href={path} className={[styles['sg--eventsSliderItem-body--header']].join(' ').trim()}>
                            {header}
                        </Link>
                        : ''
                    }
                    {description ?
                        <p className={[styles['sg--eventsSliderItem-body--description']].join(' ').trim()}>
                            {description}
                        </p>
                        : ''
                    }

                    <div className={[styles['sg--eventsSliderItem-body--info']].join(' ').trim()}>

                        {date ?
                            <p className={[styles['sg--eventsSliderItem-body--date']].join(' ').trim()}>
                                {date}
                            </p>
                            : ''
                        }
                        {time ?
                            <p className={[styles['sg--eventsSliderItem-body--time']].join(' ').trim()}>
                                {time}
                            </p>
                            : ''
                        }
                        {location ?
                            <p className={[styles['sg--eventsSliderItem-body--location']].join(' ').trim()}>
                                {location}
                            </p>
                            : ''
                        }

                    </div>
                </div>

                <div className={[styles['sg--eventsSliderItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={ratio}
                    >
                        <div className={[styles['sg--eventsSliderItem-head-image']].join(' ').trim()}>
                            <Image width='1000' height='1000'
                                src={image}
                                alt={header}
                                className={[styles['sg--eventsSliderItem-head-image--img']].join(' ').trim()}
                            />
                        </div>
                    </SgRatio>
                </div>
            </div>
        </>
    )
}