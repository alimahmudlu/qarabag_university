import _ from 'lodash';

/**
 * @functionName CHANGE DATA FORM GLOBAL
 * @functionDescription İnput və selectbox-ların redaktəsi zamanı `setDataForm` useState funksiyasına id-yə uyğun value göndərir
 */

export const changeData = (e, _formData, setFormData, _valueErrors, setValueErrors, extraValue = '', extraKey = '', extraArrayExtraValue, extraArrayExtraKey) => {
    let formData = _formData;
    let valueErrors = _valueErrors;

    const {type, checked, id, dataset: {variant}} = e.target;
    const value = !extraValue ? (type === 'checkbox' ? (e.target.value || ((checked && 1) || 0)) : e.target.value) : extraValue
    const key = !extraKey ? e.target.dataset.key : extraKey
    const extraArrayKey = !extraArrayExtraKey ? e.target.dataset.extraarraykey : extraArrayExtraKey
    const extraArrayValue = !extraArrayExtraValue ? e.target.dataset.extraarrayvalue : extraArrayExtraValue
    const name = e.target.name.split('--')[0]


    if (!key) {
        if (variant === 'array') {
            if (checked) {
                formData[name] = formData?.[name] ? [...formData?.[name], value] : [value]
            }
            else {
                formData?.[name]?.splice(formData?.[name]?.indexOf(value), 1)
            }
        }
        else {
            formData[name] = value;
        }
        delete valueErrors[name]
    }
    else {
        if (variant === 'array') {
            key.split('.').reduce((a,b)=>a[b],formData)[name] = key.split('.').reduce((a,b)=>a[b],formData)[name] ? key.split('.').reduce((a,b)=>a[b],formData)[name] : []

            if (checked) {
                key.split('.').reduce((a,b)=>a[b],formData)[name] = key.split('.').reduce((a,b)=>a[b],formData)[name] ? [...key.split('.').reduce((a,b)=>a[b],formData)[name], value] : [value]
            }
            else {
                key.split('.').reduce((a,b)=>a[b],formData)[name].splice(key.split('.').reduce((a,b)=>a[b],formData)[name].indexOf(value), 1)
            }
        }
        else {
            key.split('.').reduce((a,b)=>a[b],formData)[name] = value;
        }
        if (Object.keys(valueErrors).length > 0 && key.split('.').reduce((a,b)=>a[b],valueErrors) && key.split('.').reduce((a,b)=>a[b],valueErrors)[name]) {
            delete key.split('.').reduce((a,b)=>a[b],valueErrors)[name]
        }
    }

    if (extraArrayKey) {
        const arrextrakey = extraArrayKey.split(',');
        const arrextravalue = extraArrayValue.split('#,');
        arrextrakey.map((e, i) => {
            _.set(formData, e, arrextravalue[i]);

        })
    }


    setFormData(state => ({
        ...state,
        ...formData
    }));
    setValueErrors(state => ({
        ...state,
        ...valueErrors
    }));
}