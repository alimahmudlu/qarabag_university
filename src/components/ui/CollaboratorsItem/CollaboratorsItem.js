import styles from '@/components/ui/CollaboratorsItem/CollaboratorsItem.module.scss';
import Image from "next/image";
import { SgRatio } from '../Ratio';
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";

/* 
<SgCollaboratorsItem
     image={clubImage}
     header='Azər Bayramov'
     position='Köməkçi müəllim'
/>
*/

export default function SgCollaboratorsItem(props) {
    const { header, position,email,phone,image, path,social } = props;


    return (
        <>
            <div className={[styles['sg--collaboratorsItem']].join(' ').trim()}>
                <div className={[styles['sg--collaboratorsItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={{
                            width: 387,
                            height: 420,
                        }}
                    >
                        <div className={[styles['sg--collaboratorsItem-head-image']].join(' ').trim()}>
                            <Image width='1000' height='1000'
                                src={image}
                                alt={header}
                                className={[styles['sg--collaboratorsItem-head-image--img']].join(' ').trim()}
                            />

                        </div>
                    </SgRatio>
                </div>
                <div className={[styles['sg--collaboratorsItem-body']].join(' ').trim()}>
                    {
                        social ?
                            <div className={[styles['sg--collaboratorsItem-body--social']].join(' ').trim()}>
                                {(social || []).map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={[styles['sg--collaboratorsItem-body--social-item']].join(' ').trim()}>
                                            <Link href={item.path}
                                                  className={[styles['sg--collaboratorsItem-body--social-item--link']].join(' ').trim()}>
                                                {item.icon ?
                                                    <SgIcon icon={item.icon}/>
                                                    : ''
                                                }
                                                <span>{item.title}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>

                            : ''
                    }
                    {header ?
                        <h6 className={[styles['sg--collaboratorsItem-body--header']].join(' ').trim()}>
                            {header}
                        </h6>
                        : ''
                    }
                    {position ?
                        <p className={[styles['sg--collaboratorsItem-body--position']].join(' ').trim()}>
                            {position}
                        </p>
                        : ''
                    }
                    {email ?
                        <p className={[styles['sg--collaboratorsItem-body--position']].join(' ').trim()}>
                            {email}
                        </p>
                        : ''
                    }
                    {phone ?
                        <p className={[styles['sg--collaboratorsItem-body--position']].join(' ').trim()}>
                            {phone}
                        </p>
                        : ''
                    }
                </div>
            </div>
        </>
    )
}