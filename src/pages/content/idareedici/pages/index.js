import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import SgIcon from "@/admin/components/ui/Icon";
import {
    LANGUAGE_LIST_ROUTE, OPTIONS_LANGUAGE_LIST_ROUTE,
    PAGE_DELETE_ROUTE,
    PAGE_LIST_ROUTE,
    POST_DELETE_ROUTE,
    POST_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {useEffect, useState} from "react";
import ApiService from "@/admin/services/ApiService";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import {SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";

export default function Index(props) {
    const [selectedRow, setSelectedRow] = useState({});
    const [filters, setFilters] = useState({});
    const [filtersErrors, setFiltersErrors] = useState({});
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
        ApiService.delete(`${PAGE_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveItemModal()
            setFilters(filters)
        }).catch(error => {
            console.log(error)
        })
    }

    function handleChange(e) {
        changeData(e, filters, setFilters, filtersErrors, setFiltersErrors);
    }

    useEffect(() => {
        ApiService.get(OPTIONS_LANGUAGE_LIST_ROUTE).then(response => {
            setLanguageList(response.data.data)
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
                    <SgButtonGroup>
                        <SgButton
                            type='link'
                            isLinked={true}
                            to='/content/idareedici/pages/create'
                            color='primary'
                            size='md'
                            icon='plus'
                        >
                            New page
                        </SgButton>
                    </SgButtonGroup>
                </SgPageHead>
                <SgPageBody>
                    <div>
                        <div className='row align-items-end gap-y-[16px]'>
                            <div className='col-lg-4'>
                                <SgInput
                                    id='search'
                                    name='search'
                                    type='text'
                                    value={filters.search || ''}
                                    onChange={handleChange}
                                    label='Search'
                                    placeholder='Search...'
                                />
                            </div>
                            <div className='col-lg-4'>
                                <SgInput
                                    id='status'
                                    name='status'
                                    variant='select'
                                    options={statusOptions}
                                    value={filters.status || ''}
                                    onChange={handleChange}
                                    label='Status'
                                    placeholder='Status'
                                />
                            </div>
                            <div className='col-lg-4'>
                                <SgButton
                                    color='error-outline'
                                    onClick={() => setFilters({})}
                                >
                                    Clear Filters
                                </SgButton>
                            </div>
                        </div>
                    </div>
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
                                    name: 'Relations',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButtonGroup>
                                                    <SgButton
                                                        size='xs'
                                                        color={'primary'}
                                                        type='link'
                                                        to={`/content/idareedici/pages/relations/${key}`}
                                                    >
                                                        Edit Relations
                                                    </SgButton>
                                                </SgButtonGroup>
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
                                                                    to={`/content/idareedici/pages/edit/${key}/${language?.locale}`}
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
                            filters
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Page'
                    description='lol'
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


