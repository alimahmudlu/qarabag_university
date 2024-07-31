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
    DATA_TYPE_SHOW_ROUTE,
    OPTIONS_DATA_TYPE_LIST_ROUTE,
    OPTIONS_LANGUAGE_LIST_ROUTE,
    OPTIONS_WIDGET_LIST_ROUTE, PAGE_CREATE_ROUTE, POST_CREATE_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import SortableList from "@/admin/components/templates/Sortable/SortableList";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";


export default function Index(props) {
    const [data, setData] = useState({
        page_widgets: []
    });
    const [valueErrors, setValueErrors] = useState({});
    const [languagesOptions, setLanguagesOptions] = useState([]);
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
    const [innerPageTemplateOptions, setInnerPageTemplateOptions] = useState([
        {
            id: 1,
            name: 'News'
        },
        {
            id: 2,
            name: 'Events'
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
    const [widgets, setWidgets] = useState([])
    const [dataTypes, setDataTypes] = useState([])
    const router = useRouter();

    function handleChange(e) {
        changeData(e, data, setData, valueErrors, setValueErrors, e.target.name === 'slug' ? slugify(e.target.value) : null);
    }

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

    function handleAddWidget(id) {
        ApiService.get(`${DATA_TYPE_SHOW_ROUTE}/${id}`).then(resp => {
            setData({...data, page_widgets: [
                    ...data.page_widgets,
                    {
                        id: 0,
                        pagination_limit: 10,
                        row: data.page_widgets.length + 1,
                        status: 0,
                        widget_id: widgets.find(el => el.id === id).id,
                        widget: widgets.find(el => el.id === id),
                    },
                ]
            })
        })
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        console.log(oldIndex, newIndex, 'salam', data.page_widgets)
        setData({...data, page_widgets: arrayMoveImmutable(data.page_widgets, oldIndex, newIndex)});
    };

    useEffect(() => {
        ApiService.get(`${OPTIONS_WIDGET_LIST_ROUTE}`).then(resp => {
            setWidgets(resp.data.data)
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_DATA_TYPE_LIST_ROUTE}`).then(resp => {
            setDataTypes((resp.data.data || []).map(el => ({id: el.id, name: el.alias})))
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
                                    options={languagesOptions}
                                    disabled={true}
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
                                    name='description'
                                    id='description'
                                    placeholder='Enter your description'
                                    label='Description'
                                    value={data.description || ''}
                                    onChange={handleChange}
                                    variant='editor'
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    name='page_type'
                                    id='page_type'
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
                                    name='innerPageTemplate'
                                    id='innerPageTemplate'
                                    placeholder='Enter your inner page template'
                                    label='Inner page template'
                                    value={data.innerPageTemplate || ''}
                                    onChange={handleChange}
                                    variant='select'
                                    options={innerPageTemplateOptions}
                                />
                            </SgFormGroup>


                            <div className=''>
                                <SortableList
                                    data={data}
                                    dataTypes={dataTypes}
                                    statusOptions={statusOptions}
                                    handleChange={handleChange}


                                    onSortEnd={onSortEnd}
                                    pressDelay={200}
                                    lockAxis={'y'}
                                    helperClass={'dragging'}
                                    useDragHandle={true}
                                    disableAutoscroll={false}
                                    getContainer={() => ReactDOM.findDOMNode(document.getElementById('bodyInstance'))}
                                    useWindowAsScrollContainer={true}
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