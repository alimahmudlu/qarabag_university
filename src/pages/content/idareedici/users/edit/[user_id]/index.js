import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";

import ApiService from "@/admin/services/ApiService";
import {
    OPTIONS_DATA_TYPE_LIST_ROUTE,
    USER_CREATE_ROUTE, USER_EDIT_ROUTE,
    USER_SHOW_ROUTE,
    WIDGET_SHOW_ROUTE
} from "@/admin/configs/apiRoutes";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import {useRouter} from "next/router";


export default function Index() {
    const [data, setData] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const router = useRouter();
    const {query: {user_id}} = router;

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'userEdit', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(USER_EDIT_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/content/idareedici/users/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        ApiService.get(`${USER_SHOW_ROUTE}/${user_id}`).then(resp => {
            setData(resp.data.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Users'
                    description='Create user.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/users'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        User list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-12'>
                            <SgFormGroup>
                                <SgInput
                                    name='name'
                                    id='name'
                                    placeholder='Enter name'
                                    label='Name'
                                    value={data.name || ''}
                                    isInvalid={valueErrors.name}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='surname'
                                    id='surname'
                                    placeholder='Enter surname'
                                    label='Surname'
                                    value={data.surname || ''}
                                    isInvalid={valueErrors.surname}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='email'
                                    id='email'
                                    placeholder='Enter email'
                                    label='Email'
                                    value={data.email || ''}
                                    isInvalid={valueErrors.email}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='password'
                                    id='password'
                                    placeholder='Enter password'
                                    label='Password'
                                    type='password'
                                    value={data.password || ''}
                                    isInvalid={valueErrors.password}
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
                            Edit
                        </SgButton>
                        <SgButton
                            color='error'
                            size='sm'
                            type='link'
                            isLinked={true}
                            to='/content/idareedici/users'
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