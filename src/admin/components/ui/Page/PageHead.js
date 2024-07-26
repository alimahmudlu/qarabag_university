import styles from '@/admin/components/ui/Page/Page.module.scss'

export default function SgPageHead(props) {
    const {children, className, header, description, color, filter, variant, size, direction} = props;

    const getPageVariant = () => {
        let classes = '';

        switch (variant) {
            case 'center':
                classes = styles['pages--block-head--center']
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
                classes = styles['pages--block-head--row']
                break
            case 'column':
                classes = styles['pages--block-head--column']
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
                classes = styles['pages--block--extraSmall']
                break
            case 'small':
                classes = styles['pages--block--small']
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
                classes = styles['pages--block-head--header--main']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    return (
        <>
            <div className={[styles["pages--block-head"], className, getPageVariant(), getPageSize(), getPageDirection()].join(' ').trim()}>
                <div className={styles['pages--block-head-group']}>
                    <h3 className={[styles["pages--block-head--header"], getSectionColor()].join(' ').trim()}>
                        {header}
                    </h3>
                    {description ?
                        <p className={styles["pages--block-head--description"]}>
                            {description}
                        </p>
                        : ''
                    }
                </div>
                {filter ?
                    <div className={styles["pages--block-head-filter"]}>
                        {children}
                    </div>
                    : ''
                }
            </div>
        </>
    )
}