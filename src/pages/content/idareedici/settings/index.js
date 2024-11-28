import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";
import {useEffect, useState} from "react";
import ApiService from "@/admin/services/ApiService";
import {
    OPTIONS_LANGUAGE_LIST_ROUTE,
    OPTIONS_SETTINGS_TYPE_LIST_ROUTE
} from "@/admin/configs/apiRoutes";

export default function Index() {
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
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Users'
                        description={`User List`}
                        path={`/content/idareedici/users/`}
                        list={[
                            {
                                name: 'List',
                                path: `/content/idareedici/users/`,
                            },
                            {
                                name: 'Create',
                                path: `/content/idareedici/users/create`,
                            }
                        ]}
                    />
                </div>
                {(settingsTypeList || []).map((item, index) => {
                    const {id, title, alias, translate} = item || {};
                    const mainLanguageLocale = (languageList || []).find((lang, i) => lang.main)?.locale || 'az'

                    return (
                        <div key={index} className='col-lg-4'>
                            <DashboardItem
                                header={title}
                                description={`Edit '${title}' configurations`}
                                path={`/content/idareedici/settings/${id}/${mainLanguageLocale}`}
                                list={translate ?
                                    (languageList || []).map((lang, i) => ({
                                        row: i,
                                        name: lang?.locale,
                                        path: `/content/idareedici/settings/${id}/${lang?.locale}`,
                                    }))
                                    :
                                    [{
                                        name: 'List',
                                        path: `/content/idareedici/settings/${id}/${mainLanguageLocale}`,
                                    }]
                                }
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