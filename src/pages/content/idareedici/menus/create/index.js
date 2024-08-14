import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";

import ApiService from "@/admin/services/ApiService";
import {MENU_TYPE_CREATE_ROUTE} from "@/admin/configs/apiRoutes";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import {useRouter} from "next/router";


export default function Index(props) {
    const [data, setData] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const router = useRouter()

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors, e.target.name === 'slug' ? slugify(e.target.value) : null);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'menuCreate', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(MENU_TYPE_CREATE_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/content/idareedici/menus/'
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
                    header='Menus'
                    description='Create menu.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/menus'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Menu list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-12'>
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
                                    placeholder='Enter your alias'
                                    label='Alias'
                                    value={data.alias || ''}
                                    isInvalid={valueErrors.alias}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
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
                            type='link'
                            isLinked={true}
                            to='/content/idareedici/menus'
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