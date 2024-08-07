import styles from '@/admin/components/ui/Page/Page.module.scss'

export default function SgPageHead(props) {
    const {children, className, header, description, color, filter, variant, size, direction} = props;

    const getPageVariant = () => {
        let classes = '';

        switch (variant) {
            case 'center':
                classes = styles['files--block-head--center']
                break
            default:
                classes = ''
                break
        }

        return classes
    }

    const getPageDirection = () => {
        let classes = '';

        switch (direction) {
            case 'row':
                classes = styles['files--block-head--row']
                break
            case 'column':
                classes = styles['files--block-head--column']
                break
            default:
                classes = ''
                break
        }

        return classes
    }

    const getPageSize = () => {
        let classes = '';

        switch (size) {
            case 'extraSmall':
                classes = styles['files--block--extraSmall']
                break
            case 'small':
                classes = styles['files--block--small']
                break
            default:
                classes = ''
                break
        }

        return classes
    }

    const getSectionColor = () => {
        let classes = '';

        switch (color) {
            case 'main':
                classes = styles['files--block-head--header--main']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    return (
        <>
            <div className={[styles["files--block-head"], className, getPageVariant(), getPageSize(), getPageDirection()].join(' ').trim()}>
                <div className={styles['files--block-head-group']}>
                    <h3 className={[styles["files--block-head--header"], getSectionColor()].join(' ').trim()}>
                        {header}
                    </h3>
                    {description ?
                        <p className={styles["files--block-head--description"]}>
                            {description}
                        </p>
                        : ''
                    }
                </div>
                {filter ?
                    <div className={styles["files--block-head-filter"]}>
                        {children}
                    </div>
                    : ''
                }
            </div>
        </>
    )
}