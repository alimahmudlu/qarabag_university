import makeID from "@/admin/utils/makeID";
import {useEffect, useRef, useState} from "react";
import ReactDatetimeClass from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import styles from "@/admin/components/ui/Form/Form.module.css"
// import SunEditor from "suneditor-react";

import imageGallery from "@/admin/components/ui/Form/Input/plugins/imageGallery";
import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import('suneditor-react'), {
    ssr: false
});


export default function SgInput(props) {
    const {options = [], maxDate, minDate, data_id, counter, data_key, color, dateFormat = 'DD-MM-YYYY', timeFormat = 'HH:mm', data_extrakey, data_extraarraykey, data_extraarrayvalue, labelHidden, inline, multiple = false, searchAble = false, type, required, name, id = makeID(7), disabled, readonly, className, wrapperClassName, placeholder = '', size, label, variant, selectVariant, value, isInvalid, invalidMessage, loading, onChange = () => {}, onKeyup = () => {}, suffix, suffixType = 'icon', prefix, prefixType = 'icon', floating = false, children, ...rest} = props;
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
                        id: data_id,
                        extraarraykey: data_extraarraykey,
                        extraarrayvalue: data_extraarrayvalue
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

    const toggleOption = (e, option) => {
        if (disabled || readonly || loading) {
            e.preventDefault()
            return
        }
        else {
            if (option.id) {
                if (multiple) {
                    if (selected.includes(option.id)) {
                        // setSelected(selected.filter((item) => item !== option));
                        (onChange)?.(
                            {
                                target: {
                                    id: id,
                                    name: name,
                                    value: selected.filter((item) => item !== option.id),
                                    validity: {},
                                    dataset: {
                                        key: data_key,
                                        id: data_id,
                                        extraarraykey: data_extraarraykey,
                                        extraarrayvalue: data_extraarrayvalue
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
                                    value: [...selected, option.id],
                                    validity: {},
                                    dataset: {
                                        key: data_key,
                                        id: data_id,
                                        extraarraykey: data_extraarraykey,
                                        extraarrayvalue: data_extraarrayvalue
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
                                value: option.id,
                                validity: {},
                                dataset: {
                                    key: data_key,
                                    id: data_id,
                                    extraarraykey: data_extraarraykey,
                                    extraarrayvalue: data_extraarrayvalue
                                },
                            }
                        }
                    )
                    toggleOpen()
                }
            }
            else {
                (onChange)?.(
                    {
                        target: {
                            id: id,
                            name: name,
                            value: option.id,
                            validity: {},
                            dataset: {
                                key: data_key,
                                id: data_id,
                                extraarraykey: data_extraarraykey,
                                extraarrayvalue: data_extraarrayvalue
                            },
                        }
                    }
                )
                toggleOpen()
            }
        }
    };

    const toggleOpen = () => {
        setOpened((disabled || readonly || loading) ? false : !opened)
    }

    const selectRef = useRef(null)

    const closeOpenMenus = (e)=>{
        if(opened && !selectRef.current?.contains(e.target)){
            setOpened(false)
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('mousedown',closeOpenMenus)
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

    const renderEditor = (
        <SunEditor
            onChange={(editorContent) =>
                {
                    handleChange(
                        {
                            target: {
                                id: id,
                                name: name,
                                value: `${editorContent}`,
                                validity: {},
                                dataset: {
                                    key: data_key,
                                    id: data_id,
                                    extraarraykey: data_extraarraykey,
                                    extraarrayvalue: data_extraarrayvalue
                                },
                            }
                        }
                    )
                }
            }
            setOptions={{
                height: 700,
                requestHeaders: {
                    "X-Sample": "sample"
                },
                imageGalleryLoadURL: "/api/upload/all",
                "videoRatioList": [
                    {
                        "name": "Classic Film 3:2",
                        "value": 0.6666
                    },
                    {
                        "name": "HD",
                        "value": 0.5625
                    }
                ],
                "textTags": {
                    "bold": "b",
                    "underline": "u",
                    "italic": "i",
                    "strike": "s"
                },
                "mode": "classic",
                "rtl": false,
                "tabDisable": false,
                "charCounter": true,
                "charCounterLabel": "Xarakter sayı",
                "templates": [
                    {
                        "name": "CustomBtn",
                        "html": "<a class='customBtn' href='#'>Custom Btn</a>"
                    },
                    {
                        "name": "GoBtn",
                        "html": "<a class='customBtn goBtn' href='#'>Go Button</a>"
                    },
                    {
                        "name": "filterBtn",
                        "html": "<a class='customBtn filterBtn' href='#'>Filter Button</a>"
                    },
                    {
                        "name": "mainBtn",
                        "html": "<a class='customBtn mainBtn' href='#'>Main Button</a>"
                    }
                ],
                buttonList: [
                    ["undo", "redo"],
                    ["font", "fontSize", "formatBlock"],
                    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                    ["removeFormat"],
                    "/",
                    ["fontColor", "hiliteColor"],
                    ["outdent", "indent"],
                    ["align", "horizontalRule", "list", "table"],
                    ["link", "imageGallery", "video"],
                    ["fullScreen", "showBlocks", "codeView"],
                    ["preview", "print"],
                    ["save", "template"],
                ]
            }}
            setContents={value}
        />
    )

    const renderSelect = (
        <div ref={selectRef} onClick={toggleOpen} className={[styles["select"], getSelectVariant(), disabled && styles['disabled'], readonly && styles['read-only']].join(' ').trim()}>
            <div className="filter-option">
                <div className="filter-option-inner">
                    <div className="filter-option-inner-inner">
                        {selected.length ? (selected.length === 1 ? filteredOptions.find(el => el.id === selected[0])?.name : `${selected.length} ${placeholder} seçildi`) : (placeholder ? placeholder : (label ? label : 'Seçin'))}
                    </div>
                </div>
            </div>
            {(opened && (!disabled || !readonly)) && (
                <div className={[styles['dropdown-menu'], styles['show'], "dropdown-menu show"].join(' ').trim()}
                     onClick={(e) => e.stopPropagation()}
                >
                    {searchAble && <div className="bs-searchbox">
                        <input
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                            className='form-control'
                            type="text"
                            placeholder="Axtar..."
                            style={{paddingTop: 0, paddingBottom: 0}}
                        />
                    </div>}
                    <div className={[styles["inner"], styles["show"], "inner show"].join(' ').trim()}>
                        <ul className={[styles['dropdown-menu'], styles['inner'], styles['show'], 'dropdown-menu inner show']}>
                            {filteredOptions.length ? (
                                    <>
                                        <li
                                            className={selected.includes('') ? styles["selected"] : ""}
                                            onClick={(e) => toggleOption(e, {id: '', value: '', name: 'Seçin'})}
                                        >
                                            <a
                                                className={[styles["dropdown-item"], "dropdown-item", selected.includes('') ? styles["selected"] : ""].join(' ').trim()}>
                                                <span>Seçin</span>
                                            </a>
                                        </li>
                                        {filteredOptions.map((option, index) => (
                                            <li
                                                className={selected.includes(option) ? styles["selected"] : ""}
                                                onClick={(e) => toggleOption(e, option)}
                                                key={index}
                                            >
                                                <a
                                                    className={[styles["dropdown-item"], "dropdown-item", (selected.includes(option.id) || selected.includes(Number(option.id))) ? styles["selected"] : ""].join(' ').trim()}>
                                                    <span>{option.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </>

                            ) : (
                                <li>
                                    <span className={[styles["dropdown-item"], "dropdown-item"].join(' ').trim()}>
                                        Nəticə yoxdur.
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )

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
        <input maxLength={counter} data-id={data_id} data-extraarraykey={data_extraarraykey} data-extraarrayvalue={data_extraarrayvalue} data-key={data_key} data-extrakey={data_extrakey} onBlur={() => setOnFocus(false)} onFocus={() => setOnFocus(true)} onChange={handleChange} onKeyUp={handleKeyup} disabled={disabled} readOnly={readonly} id={id} name={name} className={[styles["input"]].join(' ').trim()} placeholder={floating ? "" : placeholder} value={value} type={getInputType()}/>
    )

    const renderTextarea = (
        <textarea maxLength={counter} data-id={data_id} data-extraarraykey={data_extraarraykey} data-extraarrayvalue={data_extraarrayvalue} data-key={data_key} onChange={handleChange} onKeyUp={handleKeyup} disabled={disabled} readOnly={readonly} id={id} name={name} className={[styles["input"]].join(' ').trim()} placeholder={floating ? "" : placeholder} value={value} type={getInputType()}/>
    )

    const getInputVariant = () => {
        switch (variant) {
            case ('textarea'):
                return renderTextarea

            case ('input'):
                return renderInput

            case ('select'):
                return renderSelect

            case "date":
                return renderDateInput;

            case "editor":
                // return renderEditor;
                return renderTextarea

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
        console.log(arrayValue, 'arrayValue', options)

        setSelected(variant === 'select' ? (options.filter(el => arrayValue.includes(el.id) || arrayValue.includes(el.id.toString())).map(el => el.id) || []) : [])
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