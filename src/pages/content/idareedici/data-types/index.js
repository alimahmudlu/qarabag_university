import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import {
    DATA_TYPE_LIST_ROUTE,
    LANGUAGE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE,
    PAGE_LIST_ROUTE,
    POST_DELETE_ROUTE
} from "@/admin/configs/apiRoutes";
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

    // function handleRemoveItem() {
    //     ApiService.delete(`${POST_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
    //         toggleRemoveItemModal()
    //         setFilters(filters)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    useEffect(() => {
        ApiService.get(OPTIONS_LANGUAGE_LIST_ROUTE).then(response => {
            setLanguageList(response.data.data)
        })
    }, []);


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Data Types'
                    description='View your site data types.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/data-types/create'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Add Data type
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
                                    key: 'alias',
                                    name: 'Alias',
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
                                    key: 'id',
                                    name: 'Operation',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButtonGroup>
                                                    <SgButton
                                                        size='xs'
                                                        color='primary'
                                                        type='link'
                                                        to={`/content/idareedici/data-types/edit/${key}`}
                                                    >
                                                        Edit
                                                    </SgButton>
                                                    <SgButton
                                                        size='xs'
                                                        color='error'
                                                        onClick={toggleRemoveItemModal}
                                                    >
                                                        Remove
                                                    </SgButton>
                                                </SgButtonGroup>
                                            </>
                                        );
                                    }
                                }
                            ],
                            api: DATA_TYPE_LIST_ROUTE,
                            filters
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


