import styles from '@/components/ui/NewsItem/NewsItem.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { SgButton } from '../Button';
import { SgRatio } from '../Ratio';

export default function SgNewsItem(props) {
    const { header, description, date, time, image, path, ratio, size } = props;

    // <SgNewsItem
    //     image={newsImage}
    //     header='Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib'
    //     path='/news/1'
    //     date='Aprel 21 2024'
    //     ratio={{
    //         width: 284,
    //         height: 137
    //     }}
    // />

    const getSize = () => {
        switch (size) {
            case 'xs':
                return styles['sg--newsItem--xs']
        }
    }

    return (
        <>
            <div className={[styles['sg--newsItem'], getSize()].join(' ').trim()}>
                <div className={[styles['sg--newsItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={ratio}
                    >
                        <div className={[styles['sg--newsItem-head-image']].join(' ').trim()}>
                            <Image width='1000' height='1000'
                                src={image}
                                alt={header}
                                className={[styles['sg--newsItem-head-image--img']].join(' ').trim()}
                            />
                        </div>
                    </SgRatio>
                </div>
                <div className={[styles['sg--newsItem-body']].join(' ').trim()}>
                    {date ?
                        <ul className={[styles['sg--newsItem-body--date']].join(' ').trim()}>
                            <li>{date}</li>
                            {time ? <li>{time}</li> : ''}
                        </ul>
                        : ''
                    }
                    {header ?
                        <Link href={path} className={[styles['sg--newsItem-body--header']].join(' ').trim()}>
                            {header}
                        </Link>
                        : ''
                    }
                    {description ?
                        <p className={[styles['sg--newsItem-body--description']].join(' ').trim()}>
                            {description}
                        </p>
                        : ''
                    }

                    <SgButton
                        className='mt-auto'
                        type='link'
                        to={path}
                        color='black-outline'
                        withOutBlock={true}
                        icon={'arrow-up-right'}
                        reverse={true}
                        size='md:lg sm:sm'
                    >
                        Daha ətraflı
                    </SgButton>
                </div>
            </div>
        </>
    )
}