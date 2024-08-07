import styles from '@/admin/components/ui/Page/Page.module.scss'

export default function SgPageBody(props) {
    const {children} = props;

    return (
        <>
            <div className={styles["files--block-body"]}>
                {children}
            </div>
        </>
    )
}