import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import {
    OPTIONS_LANGUAGE_LIST_ROUTE,
    USER_DELETE_ROUTE,
    USER_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {useEffect, useState} from "react";
import ApiService from "@/admin/services/ApiService";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";

export default function Index() {
    const [selectedRow, setSelectedRow] = useState({});
    const [filters, setFilters] = useState({});
    const [removeItemModal, setRemoveItemModal] = useState(false);

    function toggleRemoveItemModal() {
        setRemoveItemModal(!removeItemModal)
    }

    function handleRemoveItem() {
        ApiService.delete(`${USER_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveItemModal()
            setFilters(filters)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Users'
                    description='View users.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/users/create'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Add users
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
                                    key: 'name',
                                    name: 'Name',
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
                                    key: 'surname',
                                    name: 'Surname',
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
                                    key: 'email',
                                    name: 'Email',
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
                                                        to={`/content/idareedici/users/edit/${key}`}
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
                            api: USER_LIST_ROUTE,
                            filters
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>
                <SgPopup
                    header='Remove Widget'
                    description='remove widget item description'
                    size='md'
                    setToggleModal={toggleRemoveItemModal}
                    toggleModal={removeItemModal}
                >
                    <SgButtonGroup
                        gap={true}
                    >
                        <SgButton
                            size='lg'
                            color='error'
                            onClick={handleRemoveItem}
                        >
                            Remove
                        </SgButton>
                        <SgButton
                            size='lg'
                            color='primary'
                            onClick={toggleRemoveItemModal}
                        >
                            Cancel
                        </SgButton>
                    </SgButtonGroup>
                </SgPopup>
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


