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
const REQUEST_NEXT_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_NEXT_BASE_URL;

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
            signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
                callbackUrl: `${REQUEST_NEXT_BASE_URL}/content/idareedici`,
            }).then(resp => {
                if (resp.ok) {

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