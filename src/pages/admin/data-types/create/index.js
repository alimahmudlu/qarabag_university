import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import slugify from "slugify";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import ApiService from "@/admin/services/ApiService";
import {DATA_TYPE_CREATE_ROUTE, LANGUAGE_CREATE_ROUTE, OPTIONS_INPUT_TYPE_LIST_ROUTE} from "@/admin/configs/apiRoutes";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import {useRouter} from "next/router";


export default function Index(props) {
    const [data, setData] = useState({
        meta_keys: []
    });
    const [valueErrors, setValueErrors] = useState({});
    const [inputTypes, setInputTypes] = useState([]);
    const [innerPageTemplateOptions, setInnerPageTemplateOptions] = useState([
        {
            id: 1,
            name: 'News'
        },
        {
            id: 2,
            name: 'Events'
        }
    ]);
    const router = useRouter();

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors, e.target.name === 'slug' ? slugify(e.target.value) : null);
    }

    function handleAddMetaKeys(id) {
        setData({...data, meta_keys: [
                ...data.meta_keys,
                {
                    title: '',
                    alias: '',
                    input_type_id: '',
                    rules: 'required|max:2550',
                },
            ]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'dataTypeCreate', validationConstraints);


        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(DATA_TYPE_CREATE_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/admin/data-types/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        ApiService.get(OPTIONS_INPUT_TYPE_LIST_ROUTE).then(resp => {
            setInputTypes(resp.data.data.map(el => ({id: el.id, name: el.alias})))
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Data Types'
                    description='Create data type.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/data-types'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Data type list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-12'>
                            <SgFormGroup>
                                <SgInput
                                    name='alias'
                                    id='alias'
                                    placeholder='Enter your alias'
                                    label='Alias'
                                    value={data.alias || ''}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>

                            <SgFormGroup>
                                <SgInput
                                    name='inner_layout'
                                    id='inner_layout'
                                    placeholder='Enter your inner page template'
                                    label='Inner page template'
                                    value={data.inner_layout || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    options={innerPageTemplateOptions}
                                />
                            </SgFormGroup>
                        </div>
                    </div>
                </SgPageBody>


                <SgPageHead
                    header='Meta Keys'
                    description="`Data Type's meta keys`.`"
                    filter={true}
                    size='extraSmall'
                >
                    <SgButton
                        color='primary'
                        size='sm'
                        icon='plus'
                        onClick={handleAddMetaKeys}
                    >
                        Add Meta Key
                    </SgButton>
                </SgPageHead>

                <SgPageBody>
                    <div className='row gap-y-[32px]'>
                        {(data.meta_keys || []).map((item, index) => {
                            return (
                                <div key={index} className='col-lg-6'>
                                    <div key={index} className='border-1 p-[16px] rounded-[8px]'>
                                        <SgFormGroup>
                                            <SgInput
                                                id='title'
                                                name='title'
                                                data_key={`meta_keys.${index}`}
                                                label='Title'
                                                placeholder='Title'
                                                onChange={handleChange}
                                                value={item.title}
                                            />
                                        </SgFormGroup>
                                        <SgFormGroup>
                                            <SgInput
                                                id='alias'
                                                name='alias'
                                                data_key={`meta_keys.${index}`}
                                                label='Alias'
                                                placeholder='Alias'
                                                onChange={handleChange}
                                                value={item.alias}
                                            />
                                        </SgFormGroup>
                                        <SgFormGroup>
                                            <SgInput
                                                id='input_type_id'
                                                name='input_type_id'
                                                data_key={`meta_keys.${index}`}
                                                label='Input type'
                                                placeholder='Input type'
                                                onChange={handleChange}
                                                value={item.input_type_id}
                                                variant='select'
                                                options={inputTypes}
                                            />
                                        </SgFormGroup>
                                    </div>
                                </div>
                            )
                        })}
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