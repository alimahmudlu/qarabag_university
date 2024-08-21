import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import {useState} from "react";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import ApiService from "@/admin/services/ApiService";
import {LANGUAGE_DELETE_ROUTE, LANGUAGE_LIST_ROUTE} from "@/admin/configs/apiRoutes";

export default function Index() {
    const [selectedRow, setSelectedRow] = useState({});
    const [filters, setFilters] = useState({});
    const [removeLanguageModal, setRemoveLanguageModal] = useState(false);
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
    const [defaultLanguageOptions, setDefaultLanguageOptions] = useState([
        {
            id: 1,
            name: 'Yes'
        },
        {
            id: 0,
            name: 'No'
        }
    ]);

    function toggleRemoveLanguageModal() {
        setRemoveLanguageModal(!removeLanguageModal)
    }

    function handleRemoveLanguage() {
        ApiService.delete(`${LANGUAGE_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveLanguageModal()
            setFilters(filters)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Languages'
                    description='View your site languages.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/languages/create'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Add Language
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
                                    key: 'row',
                                    name: '#',
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
                                    key: 'locale',
                                    name: 'Locale',
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
                                    key: 'locale',
                                    name: 'Static Content',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButton
                                                    size='xs'
                                                    color='primary'
                                                    type='link'
                                                    to={`/content/idareedici/languages/static/${key}`}
                                                >
                                                    {row.name} - {row.locale}
                                                </SgButton>
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
                                    key: 'main',
                                    name: 'Main',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {defaultLanguageOptions.find(el => el.id === key).name}
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
                                                        to={`/content/idareedici/languages/edit/${key}`}
                                                    >
                                                        Edit
                                                    </SgButton>
                                                    <SgButton
                                                        size='xs'
                                                        color='error'
                                                        onClick={toggleRemoveLanguageModal}
                                                    >
                                                        Remove
                                                    </SgButton>
                                                </SgButtonGroup>
                                            </>
                                        );
                                    }
                                }
                            ],
                            api: LANGUAGE_LIST_ROUTE,
                            filters
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Language'
                    description='lol'
                    size='md'
                    setToggleModal={toggleRemoveLanguageModal}
                    toggleModal={removeLanguageModal}
                >
                    <SgButtonGroup
                        gap={true}
                    >
                        <SgButton
                            size='lg'
                            color='error'
                            onClick={handleRemoveLanguage}
                        >
                            Remove
                        </SgButton>
                        <SgButton
                            size='lg'
                            color='primary'
                            onClick={toggleRemoveLanguageModal}
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