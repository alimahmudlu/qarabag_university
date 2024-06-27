import styles from "@/components/ui/Section/Section.module.scss";

export default function SectionBody(props) {
    const {children} = props;

    return (
        <>
            <div className={styles['sg--sections--block-body']}>
                {children}
            </div>
        </>
    )
}