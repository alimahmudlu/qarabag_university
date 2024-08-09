import {MainLayout} from "@/admin/components/layouts";
import ReactDOM from 'react-dom'
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import slugify from "slugify";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import SgWidgetsFilter from "@/admin/components/ui/WidgetsFilter";
import {arrayMoveImmutable} from "array-move";

import ApiService from "@/admin/services/ApiService";
import {
    DATA_TYPE_EDIT_ROUTE,
    DATA_TYPE_SHOW_ROUTE,
    OPTIONS_DATA_TYPE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE, OPTIONS_PAGE_LIST_ROUTE,
    OPTIONS_WIDGET_LIST_ROUTE, PAGE_CREATE_ROUTE, POST_CREATE_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import SortableList from "@/admin/components/templates/Sortable/SortableList";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import {SgPopup} from "@/admin/components/ui/Popup";


export default function Index(props) {
    const [data, setData] = useState({
        page_widgets: []
    });
    const [valueErrors, setValueErrors] = useState({});
    const [fileManagerModal, setFileManagerModal] = useState(false);
    const [languagesOptions, setLanguagesOptions] = useState([]);

    const [selectedWidgetDataType, setSelectedWidgetDataType] = useState({});
    const [selectedWidgetDataTypeData, setSelectedWidgetDataTypeData] = useState({});
    const [widgetDataTypeModal, setWidgetDataTypeModal] = useState(false);
    const [pagesListOptions, setPagesListOptions] = useState([]);

    const [pageTypeOptions, setPageTypeOptions] = useState([
        {
            id: 2,
            name: 'Content'
        },
        {
            id: 1,
            name: 'List'
        }
    ]);
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
    const [protectOptions, setProtectOptions] = useState([
        {
            id: 1,
            name: 'Qorunur'
        },
        {
            id: 0,
            name: 'Qorunmur'
        }
    ]);
    const [widgets, setWidgets] = useState([])
    const [dataTypes, setDataTypes] = useState([])
    const router = useRouter();

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors);
    }

    function toggleFileManagerModal(e) {
        setFileManagerModal(!fileManagerModal)
    }

    function handleChangePopup(e) {
        changeData(e, selectedWidgetDataTypeData, setSelectedWidgetDataTypeData, valueErrors, setValueErrors);
    }

    function toggleWidgetDataTypeModal(e, selectedRow) {
        setSelectedWidgetDataType(selectedRow || {})
        setWidgetDataTypeModal(!widgetDataTypeModal)
    }

    function handleEditWidgetDataType() {
        ApiService.put(`${DATA_TYPE_EDIT_ROUTE}/${selectedWidgetDataType?.id}`, selectedWidgetDataTypeData).then(resp => {
            toggleWidgetDataTypeModal({}, {})
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (selectedWidgetDataType.id) {
            ApiService.get(`${DATA_TYPE_SHOW_ROUTE}/${selectedWidgetDataType?.id}`).then(resp => {
                setSelectedWidgetDataTypeData(resp.data.data)
            }).catch(error => {
                console.log(error)
            })
        }
        else {
            setSelectedWidgetDataTypeData({})
        }

        if (pagesListOptions.length === 0) {
            ApiService.get(OPTIONS_PAGE_LIST_ROUTE).then(resp => {
                setPagesListOptions(resp.data.data.map(el => ({id: el.id, name: el.title})))
            }).catch(error => {
                console.log(error)
            })
        }
    }, [selectedWidgetDataType]);

    function handleSubmit(e) {
        e.preventDefault();

        let errors = validate(data, 'pageCreate', validationConstraints);


        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            ApiService.post(PAGE_CREATE_ROUTE, data).then(resp => {
                router.push({
                    pathname: '/admin/pages/'
                }, undefined, { scroll: true });
            }).catch(error => {
                console.log(error)
            })
        }
    }


    function handleRemove(index) {
        const page_widgets = [...data.page_widgets];
        page_widgets.splice(index, 1);
        setData({...data, page_widgets: page_widgets});
    }

    function handleAddWidget(id) {
        const findWidgetObj = widgets.find(el => el.id === id) || {}
        setData({...data, page_widgets: [
                ...data.page_widgets || [],
                {
                    id: 0,
                    pagination_limit: 10,
                    row: data.page_widgets.length + 1,
                    status: 0,
                    data_type_id: findWidgetObj?.data_type_id,
                    widget_id: findWidgetObj.id,
                    widget: findWidgetObj,
                    page_widget_values: (dataTypes.find(el => el.id === findWidgetObj?.data_type_id)?.meta_keys || []).map(el => ({meta_key: el, meta_key_id: el.id}))
                },
            ]
        })
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setData({...data, page_widgets: arrayMoveImmutable(data.page_widgets, oldIndex, newIndex)});
    };

    useEffect(() => {
        ApiService.get(`${OPTIONS_WIDGET_LIST_ROUTE}`).then(resp => {
            setWidgets(resp.data.data)
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_DATA_TYPE_LIST_ROUTE}`).then(resp => {
            setDataTypes((resp.data.data || []).map(el => ({id: el.id, name: el.alias, meta_keys: el.meta_keys || []})))
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_LANGUAGE_LIST_ROUTE}`).then(resp => {
            setLanguagesOptions((resp.data.data || []).map(el => ({id: el.locale, name: el.name})))
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Pages'
                    description='Create page.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/pages'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Page list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-8'>
                            <SgFormGroup>
                                <SgInput
                                    name='title'
                                    id='title'
                                    placeholder='Enter your title'
                                    label='Title'
                                    value={data.title || ''}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='slug'
                                    id='slug'
                                    placeholder='Enter your slug'
                                    label='Slug'
                                    value={data.slug || ''}
                                    onChange={handleChange}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='language'
                                    id='language'
                                    placeholder='Enter your page language'
                                    label='Page language'
                                    value={data.language || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    disabled={true}
                                    options={languagesOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='shortDescription'
                                    id='shortDescription'
                                    placeholder='Enter your short description'
                                    label='Short description'
                                    value={data.shortDescription || ''}
                                    onChange={handleChange}
                                    variant='textarea'
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='content'
                                    id='content'
                                    placeholder='Enter your description'
                                    label='Description'
                                    value={data.content || ''}
                                    onChange={handleChange}
                                    variant='editor'
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='page_type_id'
                                    id='page_type_id'
                                    placeholder='Enter your page type'
                                    label='Page type'
                                    value={data?.page_type_id || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    options={pageTypeOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='status'
                                    id='status'
                                    placeholder='Enter status'
                                    label='Status'
                                    value={data.status || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.status}
                                    variant='select'
                                    options={statusOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='protected'
                                    id='protected'
                                    placeholder='Enter protected'
                                    label='Protected'
                                    value={data.protected || ''}
                                    onChange={handleChange}
                                    isInvalid={valueErrors.protected}
                                    variant='select'
                                    options={protectOptions}
                                />
                            </SgFormGroup>


                            <div className=''>
                                <SortableList
                                    data={data}
                                    setData={setData}
                                    valueErrors={valueErrors}
                                    setValueErrors={setValueErrors}

                                    dataTypes={dataTypes}
                                    statusOptions={statusOptions}
                                    handleChange={handleChange}
                                    handleRemove={handleRemove}


                                    onSortEnd={onSortEnd}
                                    pressDelay={200}
                                    lockAxis={'y'}
                                    helperClass={'dragging'}
                                    useDragHandle={true}
                                    // disableAutoscroll={false}
                                    // getContainer={() => ReactDOM.findDOMNode(document.getElementById('bodyInstance'))}
                                    // useWindowAsScrollContainer={true}
                                    toggleFileManagerModal={toggleFileManagerModal}
                                    fileManagerModal={fileManagerModal}

                                    toggleWidgetDataTypeModal={toggleWidgetDataTypeModal}
                                    widgetDataTypeModal={widgetDataTypeModal}
                                />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <SgWidgetsFilter
                                handleAddWidget={handleAddWidget}
                                data={{
                                    list: widgets
                                }}
                            />
                        </div>
                    </div>
                </SgPageBody>
                <SgPageFooter>
                    <SgButtonGroup
                        className='mt-[72px]'
                        gap={true}
                    >
                        <SgButton
                            color='primary'
                            size='sm'
                            onClick={handleSubmit}
                        >
                            Create
                        </SgButton>
                        <SgButton
                            color='error'
                            size='sm'
                        >
                            Cancel
                        </SgButton>
                    </SgButtonGroup>
                </SgPageFooter>
            </SgPage>

            <SgPopup
                header='Edit Data Type main page'
                description='lol'
                size='md'
                setToggleModal={toggleWidgetDataTypeModal}
                toggleModal={widgetDataTypeModal}
            >

                <SgFormGroup>
                    <SgInput
                        id='alias'
                        name='alias'
                        label='Alias'
                        placeholder='Alias'
                        value={selectedWidgetDataTypeData.alias}
                        disabled={true}
                    />
                </SgFormGroup>

                <SgFormGroup>
                    <SgInput
                        id='main_page_id'
                        name='main_page_id'
                        label='Main Page'
                        placeholder='Main Page'
                        value={selectedWidgetDataTypeData.main_page_id || ''}
                        onChange={handleChangePopup}
                        variant='select'
                        options={pagesListOptions}
                    />
                </SgFormGroup>

                <SgButtonGroup
                    gap={true}
                >
                    <SgButton
                        size='lg'
                        color='primary'
                        onClick={handleEditWidgetDataType}
                    >
                        Edit
                    </SgButton>
                    <SgButton
                        size='lg'
                        color='error'
                        onClick={(e) => toggleWidgetDataTypeModal(e, {})}
                    >
                        Cancel
                    </SgButton>
                </SgButtonGroup>
            </SgPopup>
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