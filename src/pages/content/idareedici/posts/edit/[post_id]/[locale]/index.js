import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgCheckbox, SgFile, SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import ApiService from "@/admin/services/ApiService";
import {
    DATA_TYPE_SHOW_ROUTE,
    OPTIONS_DATA_TYPE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE, POST_EDIT_ROUTE,
    POST_SHOW_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";


export default function Index() {
    const [data, setData] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const [languagesOptions, setLanguagesOptions] = useState([]);
    const [dataTypes, setDataTypes] = useState([]);
    const [fileManagerModal, setFileManagerModal] = useState(false);
    const [statusOptions, setStatusOptions] = useState([
        {
            id: 1,
            name: 'Active'
        },
        {
            id: 0,
            name: 'Deactive'
        }
    ]);
    const router  = useRouter();
    const { query } = router;
    const { locale, post_id } = query;


    function toggleFileManagerModal(e) {
        setFileManagerModal(!fileManagerModal)
    }

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'postCreate', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.put(`${POST_EDIT_ROUTE}/${post_id}`, data, {
                headers: {
                    "Content-Language": locale
                }
            }).then(resp => {
                router.push({
                    pathname: '/content/idareedici/posts/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        ApiService.get(`${POST_SHOW_ROUTE}/${post_id}`, {
                headers: {
                    "Content-Language": locale
                }
            }).then(resp => {
            setData(resp.data.data)
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_DATA_TYPE_LIST_ROUTE}`, {
                headers: {
                    "Content-Language": locale
                }
            }).then(resp => {
            setDataTypes((resp.data.data || []).map(el => ({id: el.id, name: el.alias})))
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_LANGUAGE_LIST_ROUTE}`, {
                headers: {
                    "Content-Language": locale
                }
            }).then(resp => {
            setLanguagesOptions((resp.data.data || []).map(el => ({...el, id: el.locale, name: el.name})))
        }).catch(error => {
            console.log(error)
        })
    }, []);

    useEffect(() => {
        if (data.data_type_id) {
            const _data = {...data};
            ApiService.get(`${DATA_TYPE_SHOW_ROUTE}/${data.data_type_id}`, {
                headers: {
                    "Content-Language": locale
                }
            }).then(resp => {
                setData({
                    ...data,
                    // post_values: resp.data.data.meta_keys.map(el => ({...el, meta_key_id: el.id, value: _data.value, default_value: '', ..._data.post_values.find(i => i.id === el.id)}))
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }, [data.data_type_id]);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Posts'
                    description='Edit post.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/posts'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Post list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-12'>
                            <SgFormGroup>
                                <SgInput
                                    name='status'
                                    id='status'
                                    placeholder='Enter status'
                                    label='Status'
                                    value={data.status || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.status}
                                    variant='select'
                                    options={statusOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='title'
                                    id='title'
                                    placeholder='Enter your title'
                                    label='Title'
                                    value={data.title || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.title}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='locale'
                                    id='locale'
                                    placeholder='Enter your locale'
                                    label='Locale'
                                    value={locale}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.locale}
                                    disabled={true}
                                    variant='select'
                                    options={languagesOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='short_description'
                                    id='short_description'
                                    placeholder='Enter your short description'
                                    label='Short description'
                                    value={data.short_description || ''}
                                    onChange={handleChange}
                                    variant='textarea'
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='content'
                                    id='content'
                                    placeholder='Enter your content'
                                    label='Content'
                                    value={data.content || ''}
                                    onChange={handleChange}
                                    variant='editor'
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgFile
                                    label='Image'
                                    onChange={toggleFileManagerModal}
                                    value={data.image}
                                    id='image'
                                    name='image'

                                    fileManager={{
                                        type: 'png',
                                        multiple: false,
                                        toggleFileManagerModal: toggleFileManagerModal,
                                        fileManagerModal: fileManagerModal,
                                        data: data,
                                        setData: setData,
                                        errors: valueErrors,
                                        setErrors: setValueErrors,
                                    }}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgFile
                                    label='Banner Image'
                                    onChange={toggleFileManagerModal}
                                    value={data.cover_image}
                                    id='cover_image'
                                    name='cover_image'
                                    isInvalid={valueErrors.cover_image}

                                    fileManager={{
                                        type: 'png',
                                        multiple: false,
                                        toggleFileManagerModal: toggleFileManagerModal,
                                        fileManagerModal: fileManagerModal,
                                        data: data,
                                        setData: setData,
                                        errors: valueErrors,
                                        setErrors: setValueErrors,
                                    }}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='data_type_id'
                                    id='data_type_id'
                                    placeholder='Enter your data type'
                                    label='Enter your data type'
                                    value={data.data_type_id || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    options={dataTypes}
                                />
                            </SgFormGroup>


                            {(data.post_values || []).map((item, i) => {
                                switch (item?.meta_key?.input_type?.alias) {
                                    case 'file':
                                        return (
                                            <div key={i} className='col-lg-12'>
                                                <SgFormGroup>
                                                    <SgFile
                                                        id={`value--${i}`}
                                                        name='value'
                                                        value={item.value || ''}
                                                        // isInvalid={errors.data_type_id}
                                                        label={item?.meta_key?.title}
                                                        options={dataTypes}
                                                        data_key={`post_values.${i}`}
                                                        type={item?.meta_key?.input_type?.alias}
                                                        variant={item?.meta_key?.input_type?.alias}

                                                        fileManager={{
                                                            multiple: false,
                                                            data: data,
                                                            setData: setData,
                                                            errors: valueErrors,
                                                            setErrors: setValueErrors,
                                                        }}
                                                    />
                                                </SgFormGroup>
                                            </div>
                                        )
                                    case 'image':
                                        return (
                                            <div key={i} className='col-lg-12'>
                                                <SgFormGroup>
                                                    <SgFile
                                                        id={`value--${i}`}
                                                        name='value'
                                                        value={item.value || ''}
                                                        // isInvalid={errors.data_type_id}
                                                        label={item?.meta_key?.title}

                                                        data_key={`post_values.${i}`}
                                                        type={item?.meta_key?.input_type?.alias}
                                                        variant={item?.meta_key?.input_type?.alias}

                                                        fileManager={{
                                                            type: 'png',
                                                            multiple: false,
                                                            data: data,
                                                            setData: setData,
                                                            errors: valueErrors,
                                                            setErrors: setValueErrors,
                                                        }}
                                                    />
                                                </SgFormGroup>
                                            </div>
                                        )
                                    case 'multi_image':
                                        return (
                                            <div key={i} className='col-lg-12'>
                                                <SgFormGroup>
                                                    <SgFile
                                                        id={`value--${i}`}
                                                        name='value'
                                                        value={item.value || ''}
                                                        // isInvalid={errors.data_type_id}
                                                        label={item?.meta_key?.title}

                                                        data_key={`post_values.${i}`}
                                                        type={item?.meta_key?.input_type?.alias}
                                                        variant={item?.meta_key?.input_type?.alias}

                                                        fileManager={{
                                                            type: 'png',
                                                            multiple: true,
                                                            data: data,
                                                            setData: setData,
                                                            errors: valueErrors,
                                                            setErrors: setValueErrors,
                                                        }}
                                                    />
                                                </SgFormGroup>
                                            </div>
                                        )
                                    case 'checkbox':
                                        return (
                                            <div key={i} className='col-lg-12'>
                                                <SgFormGroup>
                                                    <SgCheckbox
                                                        id={`value--${i}`}
                                                        name='value'
                                                        checked={!!item.value}
                                                        value={''}
                                                        // isInvalid={errors.data_type_id}
                                                        label={item?.meta_key?.title}
                                                        onChange={handleChange}
                                                        options={dataTypes}
                                                        data_key={`post_values.${i}`} type={item?.meta_key?.input_type?.alias}
                                                        variant={item?.meta_key?.input_type?.alias}
                                                    />
                                                </SgFormGroup>
                                            </div>
                                        )
                                    default:
                                        return (
                                            <div key={i} className='col-lg-12'>
                                                <SgFormGroup>
                                                    <SgInput
                                                        id={`value--${i}`}
                                                        name='value'
                                                        value={item.value || ''}
                                                        // isInvalid={errors.data_type_id}
                                                        label={item?.meta_key?.title}
                                                        onChange={handleChange}
                                                        data_key={`post_values.${i}`}
                                                        type={item?.meta_key?.input_type?.alias}
                                                        variant={item?.meta_key?.input_type?.alias}
                                                    />
                                                </SgFormGroup>
                                            </div>
                                        )
                                }

                            })}




                            <SgButtonGroup
                                className='mt-[72px]'
                                gap={true}
                            >
                                <SgButton
                                    color='primary'
                                    size='sm'
                                    onClick={handleSubmit}
                                >
                                    Edit
                                </SgButton>
                                <SgButton
                                    color='error'
                                    size='sm'
                                    type='link'
                                    to='/content/idareedici/posts'
                                >
                                    Cancel
                                </SgButton>
                            </SgButtonGroup>
                        </div>
                    </div>
                </SgPageBody>
            </SgPage>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}