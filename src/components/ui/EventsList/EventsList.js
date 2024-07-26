import styles from '@/components/ui/EventsList/EventsList.module.scss';
import Image from "next/image";
import SgEventItem from "@/components/ui/EventItem";
import moment from "moment";

export default function SgEventsList(props) {
    const { list, image, text } = props;
    return (
        <>
            <div className={[styles['sg--eventsList']].join(' ').trim()}>
                <div className={[styles['sg--eventsList-body']].join(' ').trim()}>
                    {(list || []).map((item, index) => {
                        return (
                            <div key={index} className={[styles['sg--eventsList-body-item']].join(' ').trim()}>
                                <SgEventItem
                                    date={item.date}
                                    title={item.title}
                                    additions={[
                                        {
                                            icon: 'calendar',
                                            text: moment(item.date).format('MMMM DD, YYYY')
                                        },
                                        {
                                            icon: 'clock',
                                            text: moment(item.date).format('HH:mm')
                                        },
                                        {
                                            icon: 'map-pin',
                                            text: item.city
                                        }
                                    ]}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={[styles['sg--eventsList-image']].join(' ').trim()}>
                    <Image width='1000' height='1000'
                        src={image}
                        alt={text}
                        className={[styles['sg--eventsList-image--img']].join(' ').trim()}
                    />
                </div>
            </div>
        </>
    )
}