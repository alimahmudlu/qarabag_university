import styles from '@/components/ui/ClubItem/ClubItem.module.scss';
import {SgRatio} from "@/components/ui/Ratio";
import Image from "next/image";
import Link from "next/link";

export default function SgClubItem(props) {
    const {header, image, path} = props;

    return (
        <>
            <div className={[styles['sg--clubItem']].join(' ').trim()}>
                <SgRatio
                    ratio={{
                        width: 1,
                        height: 1,
                    }}
                >
                    <div className={[styles['sg--clubItem-block']].join(' ').trim()}>
                        <div className={[styles['sg--clubItem-block-image']].join(' ').trim()}>
                            <Image
                                src={image || ''}
                                alt={header}
                                width={1000}
                                height={1000}
                                className={[styles['sg--clubItem-block-image--img']].join(' ').trim()}
                            />
                        </div>
                        <div className={[styles['sg--clubItem-block-body']].join(' ').trim()}>
                            <Link href={path} className={[styles['sg--clubItem-block-body--header']].join(' ').trim()}>
                                {header}
                            </Link>
                        </div>
                    </div>
                </SgRatio>
            </div>
        </>
    )
}