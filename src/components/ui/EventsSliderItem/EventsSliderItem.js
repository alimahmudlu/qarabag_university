import styles from '@/components/ui/EventsSliderItem/EventsSliderItem.module.scss';
import Image from "next/image";
import { SgButton } from '../Button';
import { SgRatio } from '../Ratio';

export default function SgEventsSliderItem(props) {
    const { header, location, description, date, time, image, path, ratio } = props;

    return (
        <>
            <div className={[styles['sg--eventsSliderItem']].join(' ').trim()}>

                <div className={[styles['sg--eventsSliderItem-body']].join(' ').trim()}>
                    {header ?
                        <h6 className={[styles['sg--eventsSliderItem-body--header']].join(' ').trim()}>
                            {header}
                        </h6>
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
                        ratio={{
                            width: ratio?.width,
                            height: ratio?.height,
                        }}
                    >
                        <div className={[styles['sg--eventsSliderItem-head-image']].join(' ').trim()}>
                            <Image
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