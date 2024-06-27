import Link from "next/link";
import Image from "next/image";
import styles from "@/components/ui/Card/Card.module.css";

export default function SgCard(props) {
    const { data } = props;
    const { image, header, link, type, duration, categories, ratio } = data;

    return (
        <>
            <div className={styles['sg--card']}>
                <div className={styles['sg--card-image']} data-post-type={type} data-post-duration={duration}>
                    <Image
                        src={image}
                        className={styles['sg--card-image--img']}
                        alt={header}
                    />
                </div>
                <div className={styles['sg--card-body']}>
                    <Link href={link} className={styles['sg--card-body--header']}>
                        {header}
                    </Link>
                    <div className={styles['sg--card-body-category']}>
                        {(categories || []).map((category, index) =>
                            <div key={index} className={styles['sg--card-body-category-item']}>
                                {category.name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}