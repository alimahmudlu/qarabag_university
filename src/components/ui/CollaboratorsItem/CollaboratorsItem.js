import styles from '@/components/ui/CollaboratorsItem/CollaboratorsItem.module.scss';
import Image from "next/image";
import { SgRatio } from '../Ratio';

/* 
<SgCollaboratorsItem
     image={clubImage}
     header='Azər Bayramov'
     position='Köməkçi müəllim'
/>
*/

export default function SgCollaboratorsItem(props) {
    const { header, position, image, path } = props;


    return (
        <>
            <div className={[styles['sg--collaboratorsItem']].join(' ').trim()}>
                <div className={[styles['sg--collaboratorsItem-head']].join(' ').trim()}>
                    <SgRatio
                        ratio={{
                            width: 3,
                            height: 4,
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
                </div>
            </div>
        </>
    )
}