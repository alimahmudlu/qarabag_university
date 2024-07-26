import styles from '@/admin/components/ui/Page/Page.module.scss';
import makeID from "@/admin/utils/makeID";

export default function SgPage(props) {
    const { children, className, blockStyle, blockClassName, id = makeID(7), inner = false, variant } = props;

    const getPageVariant = () => {
        let classes = '';

        switch (variant) {
            case 'center':
                classes = styles['pages--block--center']
                break
            default:
                classes = ''
                break
        }

        return classes
    }
    return (
        <>
            <div className={[styles["pages"], styles['page-'+id], inner ? [styles['page-'+id+'--inner'], styles['pages--inner']].join(' ').trim() : '', getPageVariant(), className].join(' ').trim()}>
                <div style={blockStyle} className={[styles["pages--block"], blockClassName].join(' ').trim()}>
                    {children}
                </div>
            </div>
        </>
    )
}