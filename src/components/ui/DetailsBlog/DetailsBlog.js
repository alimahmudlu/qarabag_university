/*
* <SgDetailsBlog
                header={'Müraciət detalları'}
                list={[
                    {
                        id: 1,
                        icon: 'mail',
                        title: 'Email',
                        name: 'example@gmail.com',
                        type: 'mail'
                    },
                    {
                        id: 2,
                        icon: 'phone',
                        title: 'Telefon',
                        name: '+994-55-123-12-11',
                        type: 'tel'
                    },
                    {
                        id: 3,
                        icon: 'phone',
                        title: 'Telefon',
                        name: '+994-55-123-12-11',
                        type: 'tel'
                    },
                ]}
            />
* */

import styles from '@/components/ui/DetailsBlog/DetailsBlog.module.css';
import {SgIcon} from "@/components/ui/Icon";
import Link from "next/link";

export default function SgDetailsBlog(props) {
    const {header, list} = props;

    return(
        <>
            <div className={[styles['sg--detailsBlog']].join(' ').trim()}>
                <div className={[styles['sg--detailsBlog-head']].join(' ').trim()}>
                    <div className={[styles['sg--detailsBlog-head--header']].join(' ').trim()}>
                        {header}
                    </div>
                </div>
                <div className={[styles['sg--detailsBlog-content']].join(' ').trim()}>
                    {
                        (list || []).map((item, index) => {
                            return(
                                <>
                                    <div key={index} className={[styles['sg--detailsBlog-content-item']].join(' ').trim()}>
                                        <div className={[styles['sg--detailsBlog-content-item--icon']].join(' ').trim()}>
                                            <SgIcon
                                                icon={item?.icon}
                                                color={'#902923'}
                                            />
                                        </div>
                                        <div className={[styles['sg--detailsBlog-content-item-info']].join(' ').trim()}>
                                            <div className={[styles['sg--detailsBlog-content-item-info--title']].join(' ').trim()}>
                                                {item?.title}
                                            </div>
                                            <Link href={(item?.type === 'mail' ? `mailto:${item?.name}` : '') || (item?.type === 'tel' ? `tel:${item?.name}` : '')} className={[styles['sg--detailsBlog-content-item-info--text']].join(' ').trim()}>
                                                {item?.name}
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}