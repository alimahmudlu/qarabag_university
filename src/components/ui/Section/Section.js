import styles from "@/components/ui/Section/Section.module.scss";
import makeID from "@/utils/makeID";

export default function Section(props) {
    const { children, className, id = makeID(7), inner, style } = props;

    return (
        <>
            <section style={style} id={id} className={[styles["sg--sections"], 'sg--section-'+id, inner ? `section-${id}--inner ${styles['sg--sections--inner']}` : '', className].join(' ').trim()}>
                <div className={['container-lg', styles['sg--sections--container']].join(' ').trim()}>
                    {children}
                </div>
            </section>
        </>
    )
}