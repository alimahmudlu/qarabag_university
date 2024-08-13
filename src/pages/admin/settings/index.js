import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";
import {useEffect, useState} from "react";
import ApiService from "@/admin/services/ApiService";
import {
    LANGUAGE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE,
    OPTIONS_SETTINGS_TYPE_LIST_ROUTE
} from "@/admin/configs/apiRoutes";

export default function Index(props) {
    const [settingsTypeList, setSettingsTypeList] = useState([])
    const [languageList, setLanguageList] = useState([])

    useEffect(() => {
        ApiService.get(OPTIONS_SETTINGS_TYPE_LIST_ROUTE).then(response => {
            setSettingsTypeList(response.data.data)
        }).catch(error => {
            console.log(error)
        })
        ApiService.get(OPTIONS_LANGUAGE_LIST_ROUTE).then(response => {
            setLanguageList(response.data.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <div className='row gap-y-[16px]'>
                {(settingsTypeList || []).map((item, index) => {
                    return (
                        <div key={index} className='col-lg-4'>
                            <DashboardItem
                                header='Site Meta'
                                description='Site Meta description'
                                path='/admin/settings/1'
                                list={[
                                    {
                                        name: 'List',
                                        path: '/admin/pages',
                                    },
                                    {
                                        name: 'List',
                                        path: '/admin/pages',
                                    }
                                ]}
                                length={12}
                            />
                        </div>
                    )
                })}
            </div>
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