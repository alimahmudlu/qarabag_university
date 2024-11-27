import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import {useEffect, useState} from "react";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import ApiService from "@/admin/services/ApiService";
import {
    OPTIONS_DATA_TYPE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE,
    POST_DELETE_ROUTE,
    POST_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import {useRouter} from "next/router";

export default function Index() {
    const {query: {data_type_id}} = useRouter();
    const [selectedRow, setSelectedRow] = useState({});
    const [filters, setFilters] = useState({});
    const [filtersErrors, setFiltersErrors] = useState({});
    const [languageList, setLanguageList] = useState([]);
    const [dataTypeOptions, setDataTypeOptions] = useState([]);
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

    function handleChange(e) {
        changeData(e, filters, setFilters, filtersErrors, setFiltersErrors);
    }

    useEffect(() => {
        ApiService.get(OPTIONS_LANGUAGE_LIST_ROUTE).then(response => {
            setLanguageList(response.data.data)
        })
        ApiService.get(OPTIONS_DATA_TYPE_LIST_ROUTE).then(response => {
            setDataTypeOptions((response.data.data || []).map(item => ({
                id: item.id,
                value: item.id,
                name: item.alias,
            })))
        })
    }, []);

    useEffect(() => {
        setFilters({...filters, data_type_id});
    }, [data_type_id]);


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Posts'
                    description='View your site Posts.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/content/idareedici/posts/create'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Add Post
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div>
                        <div className='row align-items-end gap-y-[16px] pb-[32px]'>
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
                                <SgInput
                                    id='data_type_id'
                                    name='data_type_id'
                                    variant='select'
                                    options={dataTypeOptions}
                                    value={filters.data_type_id || ''}
                                    onChange={handleChange}
                                    label='Data type'
                                    placeholder='Data type'
                                    disabled={true}
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
                                    key: 'data_type',
                                    name: 'Data type',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {key?.alias}
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
                                                                    to={`/content/idareedici/posts/edit//${key}/${language?.locale}`}
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
                            api: POST_LIST_ROUTE,
                            filters
                        }}
                        onClick={(e, row, index) => {
                            setSelectedRow(row)
                        }}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Post'
                    description='remove post item description'
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