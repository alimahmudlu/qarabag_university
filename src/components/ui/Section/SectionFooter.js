import styles from '@/components/ui/Section/Section.module.scss'

export default function SectionFooter(props) {
    const {children, className} = props;

    return (
        <>
            <div className={[styles["sg--sections--block-footer"], className].join(' ').trim()}>
                {children}
            </div>
        </>
    )
}