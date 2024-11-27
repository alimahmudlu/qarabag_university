import styles from '@/admin/components/ui/Form/Form.module.scss';
import React from "react";
import dynamic from 'next/dynamic';
const SgTemplateFileManagerModal = dynamic(() => import('@/admin/components/templates/FileManagerModal'), { ssr: false });
// import SgTemplateFileManagerModal from "@/admin/components/templates/FileManagerModal";

export default function SgFile(props) {
    const {
        label,
        name,
        externalRef,
        id,
        required,
        readonly,
        disabled,
        data_extrakey,
        data_extraarraykey,
        data_extraarrayvalue,
        value,
        loading,
        isInvalid,
        onChange,
        color,
        data_key,
        multiple,
        fileManager = undefined
    } = props;

    const handleChange = (e) => {
        if (disabled || readonly || loading) {
            e.preventDefault()
            return
        }
        (onChange)?.(e)
    }

    const getColor = () => {
        let classes = ''

        switch (color) {
            case 'light':
                classes = 'input--light'
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    return (
        fileManager ?
            <>
                <SgTemplateFileManagerModal
                    fileManager={fileManager}
                    id={id}
                    name={name}
                    config={{}}
                    multiple={multiple}
                    data={fileManager?.data}
                    setData={fileManager?.setData}
                    errors={fileManager?.errors}
                    setErrors={fileManager?.setErrors}
                    data_key={data_key}
                    value={value}
                    label={label}
                    handleChange={handleChange}
                    readonly={readonly}
                    isInvalid={isInvalid}
                    externalRef={externalRef}
                    disabled={disabled}
                    required={required}
                />
            </>
            :
            <div className={[styles['input-container'], 'mb-1', getColor()].join(' ').trim()}
                 onClick={fileManager ? onChange : undefined}>
                <label className={styles["label"]} htmlFor={id}>{label}</label>
                <div
                    className={[styles["input-wrapper"], styles["input-wrapper--file"], isInvalid && styles['input-wrapper--error'], fileManager && styles['input-wrapper--fakeFile']].join(' ').trim()}>
                    <input className={styles["file"]} type="file" name={name} ref={externalRef} data-key={data_key}
                           id={id} onChange={handleChange} disabled={disabled} multiple={multiple}
                           readOnly={readonly} required={required}/>
                    <label className={[styles["label"], styles["label--file"]].join(' ').trim()} htmlFor={id}>
                        Fayl seçin
                    </label>
                </div>
            </div>
    )
}