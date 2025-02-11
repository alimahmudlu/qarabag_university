import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import {useEffect, useState} from "react";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import ApiService from "@/admin/services/ApiService";
import {
    SETTINGS_CREATE_ROUTE,
    SETTINGS_DELETE_ROUTE,
    SETTINGS_EDIT_ROUTE,
    SETTINGS_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import {iconsData} from "@/data";
import {SgIcon} from "@/components/ui/Icon";

export default function Index() {
    const [data, setData] = useState({});
    const [selectedRow, setSelectedRow] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const [filters, setFilters] = useState({});
    const [removeItemModal, setRemoveItemModal] = useState(false);
    const [editItemModal, setEditItemModal] = useState(false);
    const router = useRouter();
    const { query } = router;
    const { setting_type_id, locale } = query;

    function toggleRemoveItemModal() {
        setRemoveItemModal(!removeItemModal)
    }

    function handleRemoveItem() {
        ApiService.delete(`${SETTINGS_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveItemModal()
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function toggleEditItemModal() {
        setEditItemModal(!editItemModal)
    }

    function handleEditItem() {
        ApiService.put(`${SETTINGS_EDIT_ROUTE}/${selectedRow.id}`, selectedRow, {headers: {"Content-Language": locale}}).then(response => {
            toggleEditItemModal()
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function handleAddItem() {
        ApiService.post(`${SETTINGS_CREATE_ROUTE}`, data, {headers: {"Content-Language": locale}}).then(response => {
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function handleChange(e) {
        changeData(e, selectedRow, setSelectedRow, valueErrors, setValueErrors)
    }

    function handleChangeNew(e) {
        changeData(e, data, setData, valueErrors, setValueErrors)
    }

    useEffect(() => {
        setData({...data, setting_type_id})
    }, [setting_type_id]);
    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Settings'
                    description='View your site settings.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/settings'
                        color='primary'
                        size='md'
                    >
                        Settings
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className='row align-items-end mb-[72px]'>
                        <div className='col-lg'>
                            <SgInput
                                id='title'
                                name='title'
                                label='Title'
                                placeholder='Title'
                                value={data.title}
                                onChange={handleChangeNew}
                            />
                        </div>
                        <div className='col-lg'>
                            <SgInput
                                id='value'
                                name='value'
                                label='Value'
                                placeholder='Value'
                                value={data.value}
                                onChange={handleChangeNew}
                            />
                        </div>
                        <div className='col-lg'>
                            {
                                setting_type_id != 2 ?
                                    <SgInput
                                        searchAble={true}
                                        variant='select'
                                        type='select'
                                        name='meta'
                                        id='meta'
                                        label='Meta'
                                        placeholder='Meta'
                                        options={iconsData.map(el => ({...el, name: <div className='d-flex align-items-center gap-2'><SgIcon  icon={el.name} />  <span>{el.name}</span></div>}))}
                                        onChange={handleChangeNew}
                                        value={data?.meta || ''}
                                    /> :
                                    <SgInput
                                        name='meta'
                                        id='meta'
                                        label='Meta'
                                        placeholder='Meta'
                                        onChange={handleChangeNew}
                                        value={data?.meta || ''}
                                    />
                            }
                        </div>
                        <div className='col-lg-auto'>
                            <SgButton
                                size='lg'
                                color='primary'
                                onClick={handleAddItem}
                            >
                                Add
                            </SgButton>
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
                                    key: 'title',
                                    name: 'Title',
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
                                    key: 'value',
                                    name: 'Value',
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
                                    key: 'meta',
                                    name: 'Meta',
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
                                                        onClick={toggleEditItemModal}
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
                            api: `${SETTINGS_LIST_ROUTE}${setting_type_id}`,
                            headers: {
                                "Content-Language": locale
                            },
                            filters
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Language'
                    description=' '
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

                <SgPopup
                    header='Edit Language'
                    description=' '
                    size='md'
                    setToggleModal={toggleEditItemModal}
                    toggleModal={editItemModal}
                >
                    <SgFormGroup>
                        <SgInput
                            id='e_alias'
                            name='alias'
                            label='Alias'
                            placeholder='Alias'
                            value={selectedRow.alias}
                            disabled={true}
                        />
                    </SgFormGroup>
                    <SgFormGroup>
                        <SgInput
                            id='e_title'
                            name='title'
                            label='Title'
                            placeholder='Title'
                            value={selectedRow.title}
                            onChange={handleChange}
                        />
                    </SgFormGroup>
                    <SgFormGroup>
                        <SgInput
                            id='e_value'
                            name='value'
                            label='Value'
                            placeholder='Value'
                            value={selectedRow.value}
                            onChange={handleChange}
                        />
                    </SgFormGroup>
                    <SgFormGroup>
                        {
                            setting_type_id != 2 ?
                                <SgInput
                                    searchAble={true}
                                    variant='select'
                                    type='select'
                                    name='meta'
                                    id='e_meta'
                                    label='Meta'
                                    placeholder='Meta'
                                    options={iconsData.map(el => ({...el, name: <div className='d-flex align-items-center gap-2'><SgIcon  icon={el.name} />  <span>{el.name}</span></div>}))}
                                    onChange={handleChange}
                                    value={selectedRow?.meta || ''}
                                /> :
                                <SgInput
                                    name='meta'
                                    id='e_meta'
                                    label='Meta'
                                    placeholder='Meta'
                                    onChange={handleChange}
                                    value={selectedRow?.meta || ''}
                                />
                        }
                    </SgFormGroup>

                    <SgButtonGroup
                        gap={true}
                    >
                        <SgButton
                            size='lg'
                            color='primary'
                            onClick={handleEditItem}
                        >
                            Edit
                        </SgButton>
                        <SgButton
                            size='lg'
                            color='error'
                            onClick={toggleEditItemModal}
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