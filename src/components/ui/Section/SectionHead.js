import styles from "@/components/ui/Section/Section.module.scss";

export default function SectionHead(props) {
    const {children, className, header, description, color, filter, variant, size, directionMobile, directionDesktop} = props;

    const getSectionVariant = () => {
        let classes = '';

        switch (variant) {
            case 'center':
                classes = styles['sg--sections--block-head-group--center']
                break
            default:
                classes = ''
                break
        }

        return classes
    }

    const getSectionDirectionDesktop = () => {
        let classes = '';

        switch (directionDesktop) {
            case 'row':
                classes = styles['sg--sections--block-head-group--row:desktop']
                break
            case 'column':
                classes = styles['sg--sections--block-head-group--column:desktop']
                break
            default:
                classes = styles['sg--sections--block-head-group--column:desktop']
                break
        }

        return classes
    }

    const getSectionDirectionMobile = () => {
        let classes = '';

        switch (directionMobile) {
            case 'row':
                classes = styles['sg--sections--block-head--row:mobile']
                break
            case 'column':
                classes = styles['sg--sections--block-head--column:mobile']
                break
            default:
                classes = styles['sg--sections--block-head--column:mobile']
                break
        }

        return classes
    }

    const getSectionSize = () => {
        let classes = '';

        switch (size) {
            case 'xs':
                classes = styles['sg--sections--block-head-group--xs']
                break
            case 'sm':
                classes = styles['sg--sections--block-head-group--sm']
                break
            case 'md':
                classes = styles['sg--sections--block-head-group--md']
                break
            case 'lg':
                classes = styles['sg--sections--block-head-group--lg']
                break
            case 'xl':
                classes = styles['sg--sections--block-head-group--xl']
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
                classes = styles['sg--sections--block-head--header--main']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    return (
        <>
            <div className={[styles['sg--sections--block-head'], filter ? styles['sg--sections--block-head--row'] : '', className].join(' ').trim()}>
                <div className={[styles['sg--sections--block-head-group'], getSectionDirectionDesktop(), getSectionDirectionMobile(), getSectionVariant(), getSectionSize()].join(' ').trim()}>
                    {header ?
                        <h3 className={[styles['sg--sections--block-head-group--header']].join(' ').trim()}>
                            {header}
                        </h3>
                        : ''
                    }
                    {description ?
                        <p className={styles['sg--sections--block-head-group--description']}>
                        {description}
                        </p>
                        : ''
                    }
                </div>
                {filter ?
                    <div className={styles['sg--sections--block-head-filter']}>
                        {children}
                    </div>
                    : ''
                }
            </div>
        </>
    )
}