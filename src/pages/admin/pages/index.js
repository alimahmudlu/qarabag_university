import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import SgIcon from "@/admin/components/ui/Icon";
import {LANGUAGE_LIST_ROUTE, PAGE_LIST_ROUTE, POST_DELETE_ROUTE, POST_LIST_ROUTE} from "@/admin/configs/apiRoutes";
import {useEffect, useState} from "react";
import ApiService from "@/admin/services/ApiService";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";

export default function Index(props) {
    const [selectedRow, setSelectedRow] = useState({});
    const [filters, setFilters] = useState({});
    const [languageList, setLanguageList] = useState([]);
    const [removeItemModal, setRemoveItemModal] = useState(false);
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

    function toggleRemoveItemModal() {
        setRemoveItemModal(!removeItemModal)
    }

    function handleRemoveItem() {
        ApiService.delete(`${POST_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveItemModal()
            setFilters(filters)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        ApiService.get(LANGUAGE_LIST_ROUTE).then(response => {
            setLanguageList(response.data.data.data)
        })
    }, []);


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Pages'
                    description='View your site pages.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/pages/create'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        New page
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <SgTable
                        tableData={{
                            data: [
                                {
                                    key: 'id',
                                    name: 'ID',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {key}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'title',
                                    name: 'Ad',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {key}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'status',
                                    name: 'Status',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {statusOptions.find(el => el.id === key).name}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'id',
                                    name: 'Language',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButtonGroup>
                                                    {
                                                        (languageList || []).map((language, index) => {
                                                            return (
                                                                <SgButton
                                                                    key={index}
                                                                    size='xs'
                                                                    color={row?.translations.find(el => el.locale === language?.locale) ? 'primary' : 'secondary'}
                                                                    type='link'
                                                                    to={`/admin/pages/edit/${key}/${language?.locale}`}
                                                                >
                                                                    {language?.locale}
                                                                </SgButton>
                                                            )
                                                        })
                                                    }
                                                </SgButtonGroup>
                                            </>
                                        );
                                    }
                                },
                                {
                                    key: 'id',
                                    name: 'Remove',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButton
                                                    size='xs'
                                                    color='error'
                                                    onClick={toggleRemoveItemModal}
                                                >
                                                    Remove
                                                </SgButton>
                                            </>
                                        );
                                    }
                                }
                            ],
                            api: PAGE_LIST_ROUTE,
                            filters: {filters}
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
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


