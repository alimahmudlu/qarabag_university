import styles from '@/components/ui/Button/Button.module.scss';
import Link from "next/link";

export default function SgButton (props) {
    const {children, size = '', color, variant, block, align, icon, onlyIcon, reverse, squared, withOutBlock, className, disabled, loading, close, active, onClick, padding, weight, decoration, type = 'button', isLinked = false, download, to = '#', ...rest} = props;

    const getButtonSize = () => {
        let classes = [];

        if (!!size) {
            (size.split(' ') || []).map(el => {
                classes.push(styles[`sg--button--${el}`]);
            });

            return classes.join(' ').trim()
        }
        return styles[`sg--button--md`]
    }

    const getButtonVariant = () => {
        let classes = '';

        switch (variant) {
            case 'rounded':
                classes = styles['sg--button--rounded']
                break

            case 'sharp':
                classes = styles['sg--button--sharp']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    const getButtonColor = () => {
        let classes = '';

        switch (color) {
            case 'primary':
                classes = styles['sg--button--primary']
                break

            case 'primary-outline':
                classes = styles['sg--button--primary-outline']
                break

            case 'secondary':
                classes = styles['sg--button--secondary']
                break

            case 'secondary-outline':
                classes = styles['sg--button--secondary-outline']
                break

            case 'error':
                classes = styles['sg--button--error']
                break

            case 'error-outline':
                classes = styles['sg--button--error-outline']
                break

            case 'black':
                classes = styles['sg--button--black']
                break

            case 'black-outline':
                classes = styles['sg--button--black-outline']
                break

            case 'white':
                classes = styles['sg--button--white']
                break

            case 'white-outline':
                classes = styles['sg--button--white-outline']
                break


            default:
                classes = styles['sg--button--primary-outline']
                break
        }

        return classes
    }

    const getButtonAttr = () => {
        let classes = [];

        if (block) {
            if (block === true) {
                classes.push(styles['sg--button--full'])
            }
            else {
                classes.push(styles[`sg--button--full:${block}`])
            }
        }
        if (align) {
            classes.push(styles[`sg--button--align-${align}`])
        }
        if (disabled) {
            classes.push(styles['sg--button--disabled'])
        }
        if (reverse) {
            classes.push(styles['sg--button--reverse'])
        }
        if (onlyIcon) {
            classes.push(styles['sg--button--onlyIcon'])
        }
        if (withOutBlock) {
            if (withOutBlock === true) {
                classes.push(styles['sg--button--withOutBlock'])
            }
            else {
                classes.push(styles[`sg--button--withOutBlock:${withOutBlock}`])
            }
        }
        if (loading) {
            classes.push(styles['sg--button--loading'])
        }
        if (decoration === 'underline') {
            classes.push(styles['sg--button--underline'])
        }
        if (squared) {
            classes.push(styles['sg--button--squared'])
        }

        return classes.join(' ')
    }

    const getButtonIcon = () => {
        return `sg-icon-${icon}`
    }

    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault()
            return
        }
        (onClick)?.(e)
    }

    if (type === 'link') {
        return (
                <Link href={to}
                      {...rest}
                      download={download ? '' : false}
                      target={disabled ? '_blank' : undefined}
                      className={[styles['sg--button'], getButtonSize(), getButtonVariant(), getButtonColor(), getButtonAttr(), getButtonIcon(), className].join(' ').trim()}
                      onClick={handleClick}
                >
                    {children}
                </Link>
        )
    }
    return (
        <button
            {...rest}
            className={[styles['sg--button'], getButtonSize(), getButtonVariant(), getButtonColor(), getButtonAttr(), getButtonIcon(), className].join(' ').trim()} type={type}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}