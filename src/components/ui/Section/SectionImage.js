import styles from "@/components/ui/Section/Section.module.scss";
import Image from "next/image";

export default function SectionImage(props) {
    const { image, alternative, className } = props;

    return (
        <>
            <div className={[styles['sg--sections--block-image'], className].join(' ').trim()}>
                <Image width='1000' height='1000'
                    className={styles['sg--sections--block-image--img']}
                    src={image || ''}
                    alt={alternative}
                />
            </div>
        </>
    )
}