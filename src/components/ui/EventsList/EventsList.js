import styles from '@/components/ui/EventsList/EventsList.module.scss';
import Image from "next/image";
import SgEventItem from "@/components/ui/EventItem";
import moment from "moment";

export default function SgEventsList(props) {
    const { list, image, text, page_id } = props;
    return (
        <>
            <div className={[styles['sg--eventsList']].join(' ').trim()}>
                <div className={[styles['sg--eventsList-body']].join(' ').trim()}>
                    {(list || []).map((item, index) => {
                        const itemContent = item?.post_values.reduce((a, v) => ({
                            ...a,
                            [v.meta_key?.alias]: v
                        }), {});
                        return (
                            <div key={index} className={[styles['sg--eventsList-body-item']].join(' ').trim()}>
                                <SgEventItem
                                    date={item.date}
                                    title={item.title}
                                    path={`/page/${page_id}/${item.id}`}
                                    additions={[
                                        {
                                            icon: 'calendar',
                                            text: moment(itemContent?.date?.value).format('MMMM DD, YYYY')
                                        },
                                        {
                                            icon: 'clock',
                                            text: itemContent?.time?.value
                                        },
                                        {
                                            icon: 'map-pin',
                                            text: itemContent?.location?.value
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