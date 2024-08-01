import makeID from "@/utils/makeID";
import {useEffect, useState} from "react";
// import ReactDatetimeClass from "react-datetime";
import ReactDatetimeClass from 'react-datetime';
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import styles from "@/components/ui/Form/Form.module.css"

export default function SgInput(props) {
    const {options = [], maxDate, minDate, data_id, counter, data_key, color, dateFormat = 'DD-MM-YYYY', timeFormat = 'HH:mm', data_extrakey, labelHidden, inline, multiple = false, searchAble = false, type, required, name, id = makeID(7), disabled, readonly, className, wrapperClassName, placeholder = '', size, label, variant, selectVariant, value, isInvalid, invalidMessage, loading, onChange = () => {}, onKeyup = () => {}, suffix, suffixType = 'icon', prefix, prefixType = 'icon', floating = false, children, ...rest} = props;
    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState(variant === 'select' ? (value || []) : []);
    const [filter, setFilter] = useState("");
    const [opened, setOpened] = useState(false);
    const [onFocus, setOnFocus] = useState(false);

    const getSuffixType = () => {
        let returnType = ''
        switch (suffixType) {
            case 'icon':
                returnType = styles['input-suffix--icon']
                break

            case 'text':
                returnType = styles['input-suffix--text']
                break

            default:
                returnType = styles['input-suffix--icon']
                break
        }

        return returnType
    }

    const getPrefixType = () => {
        let returnType = ''
        switch (prefixType) {
            case 'icon':
                returnType = styles['input-suffix--icon']
                break

            case 'text':
                returnType = styles['input-suffix--text']
                break

            default:
                returnType = styles['input-suffix--icon']
                break
        }

        return returnType
    }

    const getSize = () => {
        let classes = ''

        switch (size) {
            case 'big':
                classes = styles['input--big']
                break

            case 'small':
                classes = styles['input--small']
                break

            case 'extraSmall':
                classes = styles['input--extraSmall']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    const getColor = () => {
        let classes = ''

        switch (color) {
            case 'light':
                classes = styles['input--light']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    const getSelectVariant = () => {
        let classes = ''

        switch (selectVariant) {
            case 'checkbox':
                classes = styles['select--checkbox']
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    const getInputType = () => {
        let returnType = ''
        switch (type) {
            case 'password':
                switch (showPassword) {
                    case true:
                        returnType = 'text'
                        break

                    case false:
                        returnType = 'password'
                        break
                }
                break

            default:
                returnType = type
                break
        }

        return returnType
    }

    const handleChange = (e) => {
        if (disabled || readonly || loading) {
            e.preventDefault()
            return
        }
        (onChange)?.(e)
    }

    const handleChangeDate = (e) => {
        if (disabled || readonly || loading) {
            e.preventDefault()
            return
        }
        (onChange)?.(
            {
                target: {
                    id: id,
                    name: name,
                    // value: moment(e['_d']).format([['date', 'date-time'].includes(type) ? dateFormat : '', ['time', 'date-time'].includes(type) ? timeFormat : ''].join(' ').trim()),
                    value: moment(e['_d']).format(),
                    validity: {},
                    dataset: {
                        key: data_key,
                        id: data_id
                    },
                }
            }
        )
    }

    const handleKeyup = (e) => {
        if (disabled || readonly || loading) {
            e.preventDefault()
            return
        }
        (onKeyup)?.(e)
    }

    const toggleOption = (option) => {
        if (multiple) {
            if (selected.includes(option)) {
                // setSelected(selected.filter((item) => item !== option));
                (onChange)?.(
                    {
                        target: {
                            id: id,
                            name: name,
                            value: selected.filter((item) => item !== option),
                            validity: {},
                            dataset: {
                                key: data_key,
                                id: data_id
                            },
                        }
                    }
                )
            }
            else {
                // setSelected([...selected, option]);
                (onChange)?.(
                    {
                        target: {
                            id: id,
                            name: name,
                            value: [...selected, option.value],
                            validity: {},
                            dataset: {
                                key: data_key,
                                id: data_id
                            },
                        }
                    }
                )
            }
        }
        else {
            // setSelected([option]);
            (onChange)?.(
                {
                    target: {
                        id: id,
                        name: name,
                        value: option.value,
                        validity: {},
                        dataset: {
                            key: data_key,
                            id: data_id
                        },
                    }
                }
            )
            toggleOpen()
        }
    };

    const toggleOpen = () => {
        setOpened((!disabled || !readonly) ? !opened : false)
    }

    const filteredOptions = options.filter((a) =>
        a.name.toString().toLowerCase().startsWith(filter.toLowerCase())
    );

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const validDate = (current, selected) => {
        let min = minDate ? current.isAfter(minDate) : true
        let max = maxDate ? current.isBefore(maxDate) : true
        return min && max
    }

    const renderDateInput = (
        <ReactDatetimeClass
            onChange={handleChangeDate}
            dateFormat={['date', 'date-time'].includes(type) ? dateFormat : false}
            timeFormat={['time', 'date-time'].includes(type) ? timeFormat : false}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            onKeyUp={handleKeyup}
            inputProps={{
                disabled: disabled,
                readOnly: readonly,
                id: id,
                name: name,
                className: [styles["input"], getSize()].join(" ").trim(),
                placeholder: floating ? "" : placeholder,
                onFocus: () => setOnFocus(true),
                onBlur: () => setOnFocus(false)
            }}
            value={value}
            type={getInputType()}
            isValidDate={validDate}
        />
    )

    const renderInput = (
        <input maxLength={counter} data-id={data_id} data-key={data_key} data-extrakey={data_extrakey} onBlur={() => setOnFocus(false)} onFocus={() => setOnFocus(true)} onChange={handleChange} onKeyUp={handleKeyup} disabled={disabled} readOnly={readonly} id={id} name={name} className={[styles["input"]].join(' ').trim()} placeholder={floating ? "" : placeholder} value={value} type={getInputType()}/>
    )

    const renderTextarea = (
        <textarea maxLength={counter} data-id={data_id} data-key={data_key} onChange={handleChange} onKeyUp={handleKeyup} disabled={disabled} readOnly={readonly} id={id} name={name} className={[styles["input"]].join(' ').trim()} placeholder={floating ? "" : placeholder} value={value} type={getInputType()}/>
    )

    const getInputVariant = () => {
        switch (variant) {
            case ('textarea'):
                return renderTextarea

            case ('input'):
                return renderInput

            case "date":
                return renderDateInput;

            default:
                return renderInput
        }
    }

    const floatingInput = (
        <>
            {getInputVariant()}
        </>
    )

    const renderAffixInput = (
        <div className={[styles['input-wrapper'], onFocus ? styles['input-wrapper--focus'] : '', wrapperClassName, disabled && styles['disabled'], readonly && styles['read-only']].join(' ').trim()} {...rest}>
            {prefix ? <div className={[styles['input-suffix'], styles['input-suffix-start'], getPrefixType()].join(' ').trim()}>{prefix}</div> : null}
            {floatingInput}
            {suffix ? <div className={[styles['input-suffix'], styles['input-suffix-end'], getSuffixType()].join(' ').trim()}>{suffix}</div> : null}
            {type === 'password' ? <div className={[styles["input-suffix"], styles["input-suffix-end"], styles["input-suffix--icon"]].join(' ').trim()}>
                <span onClick={handleTogglePassword}>
                    {!showPassword ?
                        <i className="sg-icon sg-icon-eye"></i>
                        :
                        <i className="sg-icon sg-icon-eye-off"></i>
                    }
                </span>
            </div> : ''}
        </div>
    )

    const renderInvalid = (
        (isInvalid && invalidMessage) ?
            <div className={styles["invalid"]} id={`${id}-error`}>
                {invalidMessage}
            </div>
            : ''
    )

    const renderChildren = () => {
        return renderAffixInput
    }

    useEffect(() => {
        const arrayValue = value ? (typeof value !== 'object' ? [value] : value) : [];

        setSelected(variant === 'select' ? (options.filter(el => arrayValue.includes(el.value)).map(el => el.value) || []) : [])
    }, [value]);

    return (
        <>
            <div className={[styles['input-container'], getSize(), getColor(), inline && styles['input--inline'], isInvalid && styles['input--error']].join(' ').trim()}>
                {!floating && !labelHidden && <label htmlFor={id} className={[styles["label"], counter ? styles['label--flex'] : '', !label && 'opacity-0'].join(' ').trim()}>{label || id} {counter ? <span className={styles['label--counter']}>{value.length}/{counter}</span> : ''}</label>}
                {renderChildren()}
                {renderInvalid}
            </div>
        </>
    )
}