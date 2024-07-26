import { AuthLayout } from "@/admin/components/layouts";
import {SgSectionAuth} from "@/admin/components/sections/Auth";
import {SgCheckbox, SgCheckboxGroup, SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {SgButton} from "@/admin/components/ui/Button";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import ApiService from "@/admin/services/ApiService";
import {LOGIN_ROUTE} from "@/admin/configs/apiRoutes";
import {useState} from "react";
import {changeData} from "@/admin/utils/changeData";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import { signIn, getCsrfToken } from 'next-auth/react'
import {useRouter} from "next/router";
import {toast} from "react-toastify";

export default function Index(props) {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const router = useRouter()

    function handleChange(e) {
        changeData(e, data, setData, errors, setErrors)
    }

    function handleLogin(e) {
        e.preventDefault();

        let errors = validate(data, 'sign-in', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
        }
        else {
    /*        ApiService.post(LOGIN_ROUTE, data).then(resp => {
                console.log(resp)
            }).catch(err => {
                console.log(err, 'err')
            })*/

            signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
                callbackUrl: `/admin`,
            }).then(resp => {
                console.log(resp)
                if (resp.ok) {
                    router.push(resp.url)
                }
                else {
                    toast(resp.error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }).catch(err => console.log(err, 'err'))
        }
    }

    return (
        <>
            <SgSectionAuth
                header='Log in to your account'
                description='Welcome back! Please enter your details.'
            >
                <SgFormGroup>
                    <SgInput
                        label='Email'
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter your email'
                        onChange={handleChange}
                        isInvalid={errors.email}
                    />
                </SgFormGroup>
                <SgFormGroup>
                    <SgInput
                        label='Password'
                        id='password'
                        name='password'
                        type='password'
                        placeholder='••••••••'
                        onChange={handleChange}
                        isInvalid={errors.password}
                    />
                </SgFormGroup>
                <SgFormGroup>
                    <SgButtonGroup
                        gap={true}
                        className='align-items-center justify-content-between'
                    >
                        <SgCheckboxGroup>
                            <SgCheckbox
                                label='Remember me 30days'
                                id='remember'
                                name='remember'
                                size='sm'
                                onChange={handleChange}
                                isInvalid={errors.remember}
                            />
                        </SgCheckboxGroup>
                        <SgButton
                            type='link'
                            isLinked={true}
                            to='/forgot-password'
                            color='primary-outline'
                            withOutBlock={true}
                            size='sm'
                        >
                            Forgot password
                        </SgButton>
                    </SgButtonGroup>
                </SgFormGroup>
                <SgFormGroup>
                    <SgButton
                        color='primary'
                        block={true}
                        onClick={handleLogin}
                    >
                        Sign in
                    </SgButton>
                </SgFormGroup>
                <SgFormGroup>
                    <SgButtonGroup
                        gap={true}
                    >
                        Don’t have an account?

                        <SgButton
                            type='link'
                            isLinked={true}
                            to='/sign-up'
                            color='primary-outline'
                            withOutBlock={true}
                            size='sm'
                        >
                            Sign up
                        </SgButton>
                    </SgButtonGroup>
                </SgFormGroup>
            </SgSectionAuth>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            <AuthLayout>
                {page}
            </AuthLayout>
        </>
    )
}