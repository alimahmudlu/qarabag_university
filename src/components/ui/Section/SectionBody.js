import styles from "@/components/ui/Section/Section.module.scss";

export default function SectionBody(props) {
    const {children, className} = props;

    return (
        <>
            <div className={[styles['sg--sections--block-body'], className].join(' ').trim()}>
                {children}
            </div>
        </>
    )
}