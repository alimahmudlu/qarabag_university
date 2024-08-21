import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import ApiService from "@/admin/services/ApiService";
import {LANGUAGE_CREATE_ROUTE} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";


export default function Index() {
    const [data, setData] = useState({});
    const [valueErrors, setValueErrors] = useState({});
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
    const [defaultLanguageOptions, setDefaultLanguageOptions] = useState([
        {
            id: 1,
            name: 'Yes'
        },
        {
            id: 0,
            name: 'No'
        }
    ]);
    const router = useRouter();

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'languageCreate', validationConstraints);


        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(LANGUAGE_CREATE_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/admin/languages/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Languages'
                    description='Create language.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/languages'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Language list
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
                                    onChange={handleChange}
                                    isInvalid={valueErrors.name}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='locale'
                                    id='locale'
                                    placeholder='Enter your locale'
                                    label='Locale'
                                    value={data.locale || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.locale}
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
                                    onChange={handleChange}
                                    isInvalid={valueErrors.row}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='main'
                                    id='main'
                                    placeholder='Enter default Language status'
                                    label='Default Language'
                                    value={data.main || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.main}
                                    variant='select'
                                    options={defaultLanguageOptions}
                                />
                            </SgFormGroup>




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
                                    type='link'
                                    to='/content/idareedici/languages'
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