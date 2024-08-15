import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import SgIcon from "@/admin/components/ui/Icon";
import {useState} from "react";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import ApiService from "@/admin/services/ApiService";
import {
    STATIC_CONTENT_CREATE_ROUTE,
    STATIC_CONTENT_DELETE_ROUTE,
    STATIC_CONTENT_EDIT_ROUTE,
    STATIC_CONTENT_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import {iconsData} from "@/data";

export default function Index(props) {
    const [data, setData] = useState({});
    const [selectedRow, setSelectedRow] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const [filters, setFilters] = useState({});
    const [removeItemModal, setRemoveItemModal] = useState(false);
    const [editItemModal, setEditItemModal] = useState(false);
    const router = useRouter();
    const { query } = router;
    const { locale } = query;
    const [iconOptions, setIconOptions] = useState(iconsData)

    function toggleRemoveItemModal() {
        setRemoveItemModal(!removeItemModal)
    }

    function handleRemoveItem() {
        ApiService.delete(`${STATIC_CONTENT_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
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
        ApiService.put(`${STATIC_CONTENT_EDIT_ROUTE}/${selectedRow.id}/translate`, selectedRow, {headers: {"Content-Language": locale}}).then(response => {
            toggleEditItemModal()
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function handleAddItem() {
        ApiService.post(`${STATIC_CONTENT_CREATE_ROUTE}`, data, {headers: {"Content-Language": locale}}).then(response => {
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

                            <SgInput
                                name='meta'
                                id='meta'
                                placeholder='Meta'
                                label='Status'
                                value={data.meta || ''}
                                onChange={handleChangeNew}
                                variant='select'
                                options={icons}
                            />
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
                            api: STATIC_CONTENT_LIST_ROUTE,
                            headers: {
                                "Content-Language": locale
                            },
                            filters: {filters}
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Language'
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

                <SgPopup
                    header='Edit Language'
                    description='lol'
                    size='md'
                    setToggleModal={toggleEditItemModal}
                    toggleModal={editItemModal}
                >
                    <SgFormGroup>
                        <SgInput
                            id='alias'
                            name='alias'
                            label='Alias'
                            placeholder='Alias'
                            value={selectedRow.alias}
                            onChange={handleChange}
                        />
                    </SgFormGroup>
                    <SgFormGroup>
                        <SgInput
                            id='value'
                            name='value'
                            label='Value'
                            placeholder='Value'
                            value={selectedRow.value}
                            onChange={handleChange}
                        />
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