/*
* <SgComment
                image={monumentItemImage}
                description={'Lorem ipsum dolor sit amet consectetur. Ac congue senectus est risus sit. Aliquet netus amet eleifend diam maecenas amet ullamcorper et. Posuere posuere lorem arcu id hendrerit. Aliquam mattis vitae adipiscing platea phasellus cursus id dui etiam. Mauris consequat sit convallis vel egestas'}
                fullName={'Anar Abbasov'}
                position={'Dekan'}
            />
* */

import styles from '@/components/ui/Comment/Comment.module.css';
import Image from "next/image";

export default function SgComment(props) {
    const {image, description, fullName, position } = props;

    return (
        <>
            <div className={[styles['sg--comment']].join(' ').trim()}>
                <div className={[styles['sg--comment-image']].join(' ').trim()}>
                    <Image
                        src={image}
                        alt={description}
                        className={[styles['sg--comment-image--img']].join(' ').trim()}
                    />
                </div>
                <div className={[styles['sg--comment-content']].join(' ').trim()}>
                    <p className={[styles['sg--comment-content--description']].join(' ').trim()}>
                        {description}
                    </p>
                    <div className={[styles['sg--comment-content-person']].join(' ').trim()}>
                        <div className={[styles['sg--comment-content-person--name']].join(' ').trim()}>
                            {fullName}
                        </div>
                        <span className={[styles['sg--comment-content-person--position']].join(' ').trim()}>
                            {position}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}