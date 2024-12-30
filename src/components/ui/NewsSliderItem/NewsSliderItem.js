import styles from '@/components/ui/NewsSliderItem/NewsSliderItem.module.scss';
import Image from "next/image";
import Link from "next/link";
import { SgIcon } from '../Icon';
import { SgRatio } from '../Ratio';
import moment from "moment";
import {useRouter} from "next/router";

export default function SgNewsSliderItem(props) {
    const { header, image, path, date, duration } = props;

    const router = useRouter();
    const {locale} = router

    // <SgNewsSliderItem
    //     image={item.image}
    //     header={item.header}
    //     path={item.path}
    //     date={item.date}
    //     duration={item.duration}
    // />

    return (
        <>
            <div className={[styles['sg--newsSliderItem']].join(' ').trim()}>
                <div className={[styles['sg--newsSliderItem-block']].join(' ').trim()}>
                    <div className={[styles['sg--newsSliderItem-block--img']].join(' ').trim()}>
                        <SgRatio
                            ratio={{
                                width: 1,
                                height: 1,
                            }}
                        >
                            <div className={[styles['sg--newsSliderItem-block-image']].join(' ').trim()}>
                                <Image
                                    src={image || ''}
                                    alt={header}
                                    width={1000}
                                    height={1000}
                                    className={[styles['sg--newsSliderItem-block-image--img']].join(' ').trim()}
                                />
                            </div>
                        </SgRatio>
                    </div>

                    <div className={[styles['sg--newsSliderItem-block-body']].join(' ').trim()}>
                        <Link href={path} className={[styles['sg--newsSliderItem-block-body--header']].join(' ').trim()}>
                            {header}
                        </Link>

                        <div className={[styles['sg--newsSliderItem-block-body-info']].join(' ').trim()}>
                            {date ?
                                <div className={[styles['sg--newsSliderItem-block-body-info--date']].join(' ').trim()}>
                                    <span className={[styles['sg--newsSliderItem-block-body-info--date--icon']].join(' ').trim()}>
                                        <SgIcon icon={'calendar'} />
                                    </span>
                                    <p className={[styles['sg--newsSliderItem-block-body-info--date--text']].join(' ').trim()}>
                                        {moment(date).locale(locale).format('MMMM DD, YYYY')}
                                    </p>
                                </div>
                                : null
                            }
                            {duration ? <div className={[styles['sg--newsSliderItem-block-body-info--date']].join(' ').trim()}>
                                <span className={[styles['sg--newsSliderItem-block-body-info--date--icon']].join(' ').trim()}>
                                    <SgIcon icon={'clock'} />
                                </span>
                                <p className={[styles['sg--newsSliderItem-block-body-info--date--text']].join(' ').trim()}>
                                   {duration}
                                </p>
                            </div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}