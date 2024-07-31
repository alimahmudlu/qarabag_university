import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFile, SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
// import slugify from "slugify";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";

import ApiService from "@/admin/services/ApiService";
import {OPTIONS_DATA_TYPE_LIST_ROUTE, WIDGET_CREATE_ROUTE} from "@/admin/configs/apiRoutes";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import {useRouter} from "next/router";


export default function Index(props) {
    const [data, setData] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const [fileManagerModal, setFileManagerModal] = useState(false);
    const [dataTypes, setDataTypes] = useState([])
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
    const [pageTypeOptions, setPageTypeOptions] = useState([
        {
            id: 2,
            name: 'Content'
        },
        {
            id: 1,
            name: 'List'
        }
    ]);
    const router = useRouter()

    function toggleFileManagerModal(e) {
        setFileManagerModal(!fileManagerModal)
    }

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'widgetCreate', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(WIDGET_CREATE_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/admin/widgets/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        ApiService.get(`${OPTIONS_DATA_TYPE_LIST_ROUTE}`).then(resp => {
            setDataTypes((resp.data.data || []).map(el => ({id: el.id, name: el.alias})))
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Widgets'
                    description='Create widget.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/widgets'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Widget list
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
                                    name='name'
                                    id='name'
                                    placeholder='Enter your name'
                                    label='Name'
                                    value={data.name || ''}
                                    isInvalid={valueErrors.name}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='alias'
                                    id='alias'
                                    placeholder='Enter your key'
                                    label='Key'
                                    value={data.alias || ''}
                                    isInvalid={valueErrors.alias}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='description'
                                    id='description'
                                    placeholder='Enter your description'
                                    label='Description'
                                    value={data.description || ''}
                                    isInvalid={valueErrors.description}
                                    variant='textarea'
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='row'
                                    id='row'
                                    placeholder='Enter your row'
                                    label='Row'
                                    type='number'
                                    value={data.row || ''}
                                    isInvalid={valueErrors.row}
                                    onChange={handleChange}
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
                                <SgInput
                                    name='page_type_id'
                                    id='page_type_id'
                                    placeholder='Enter your page type'
                                    label='Page type'
                                    value={data?.page_type_id || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    options={pageTypeOptions}
                                />
                            </SgFormGroup>
                            {Number(data?.page_type_id) === 2 &&
                                <SgFormGroup>
                                    <SgInput
                                        name='data_type_id'
                                        id='data_type_id'
                                        placeholder='Enter your data type'
                                        label='Data type'
                                        value={data?.data_type_id || ''}
                                        onChange={handleChange}
                                        variant='select'
                                        options={dataTypes}
                                    />
                                </SgFormGroup>
                            }
                        </div>
                    </div>
                </SgPageBody>
                <SgPageFooter>
                    <SgButtonGroup
                        className='mt-[72px]'
                        gap={true}
                    >
                        <SgButton
                            color='primary'
                            size='sm'
                            onClick={handleSubmit}
                        >
                            Create
                        </SgButton>
                        <SgButton
                            color='error'
                            size='sm'
                        >
                            Cancel
                        </SgButton>
                    </SgButtonGroup>
                </SgPageFooter>
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