/*
* <SgContactBanner
                header={'Əlaqə'}
                description={'Bizimlə əlaqə saxladığınız üçün təşəkkürlər.'}
                links={[
                    {
                        name: '(+994)55-555-55-55',
                        icon: 'smartphone',
                        type: 'tel'
                    },
                    {
                        name: 'example@gmail.com',
                        icon: 'mail',
                        type: 'mail'
                    },
                ]}
            />
* */

import styles from '@/components/ui/ContactBanner/ContactBanner.module.css';
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";

export default function SgContactBanner(props) {
    const {header, description, links} = props;

    return (
        <>
            <div className={[styles['sg--contactBanner']].join(' ').trim()}>
                <div className={[styles['sg--contactBanner-head']].join(' ').trim()}>
                    <h3 className={[styles['sg--contactBanner-head--header']].join(' ').trim()}>
                        {header}
                    </h3>
                </div>
                <div className={[styles['sg--contactBanner-body']].join(' ').trim()}>
                    <div className={[styles['sg--contactBanner-body-content']].join(' ').trim()}>
                        <p className={[styles['sg--contactBanner-body-content--description']].join(' ').trim()}>
                            {description}
                        </p>
                    </div>
                    <div className={[styles['sg--contactBanner-body-links']].join(' ').trim()}>
                        {
                            (links || []).map((item, index) => (
                                <Link key={index} href={(item?.type === 'mail' ? `mailto:${item?.name}` : '') || (item?.type === 'tel' ? `tel:${item?.name}` : '')} className={[styles['sg--contactBanner-body-links--item']].join(' ').trim()}>
                                    <SgIcon
                                        icon={item?.icon}
                                    />
                                    {item?.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}