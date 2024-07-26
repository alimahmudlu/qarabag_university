import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import ApiService from "@/admin/services/ApiService";
import {
    MENU_ITEM_LIST_ROUTE,
    MENU_ITEM_SAVE_ROUTE,
    OPTIONS_PAGE_LIST_ROUTE,
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import Nestable from "react-nestable";
import {GetMaxId} from "@/admin/utils/getMaxId";


export default function Index(props) {
    const [data, setData] = useState([]);
    const [nestableData, setNestableData] = useState([]);
    const [valueErrors, setValueErrors] = useState({});

    const [optionsData, setOptionsData] = useState({});
    const [optionsValueErrors, setOptionsValueErrors] = useState({});

    const [itemsOptions, setItemsOptions] = useState([])

    const [itemTypeOptions, setItemTypeOptions] = useState([
        {
            id: 'post',
            name: 'post'
        },
        {
            id: 'page',
            name: 'page'
        },
        {
            id: 'external',
            name: 'external'
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
    const { query } = useRouter();
    const { menu_type_id, locale } = query;
    const router = useRouter()

    function handleChangeOptionsData(e, extraArrayExtraValue) {
        changeData(e, optionsData, setOptionsData, optionsValueErrors, setOptionsValueErrors, '', '', extraArrayExtraValue);
    }

    let newData = [];

    const nestableItem = (datas, parentId, i) => {
        let object = {...datas};
        delete object.children;
        object.parent_id = parentId
        object.row = i + 1

        if (object.new) {
            object.id = null;
        }

        newData = [...newData, object];

        (datas.children || []).map((item, index) => {
            nestableItem(item, object.id, index)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        nestableData.map((item, index) => {
            nestableItem(item, null, index)
        })

        ApiService.post(`${MENU_ITEM_SAVE_ROUTE}`, {
            menu_type_id: menu_type_id,
            menu_items: newData
        }).then(resp => {
            router.push({
                pathname: '/admin/menus/'
            }, undefined, { scroll: true });
        }).catch(error => {
            console.log(error)
        })
    }

    function addMenuItem(e) {
        e.preventDefault();

        let errors = validate(optionsData, 'menuItemAdd', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            setData([...data, {...optionsData, id: GetMaxId(data, 'id') + 1, new: true}])
            setNestableData([...nestableData, {...optionsData, id: GetMaxId(data, 'id') + 1, new: true}])

            cancelMenuItem();
        }
    }

    function cancelMenuItem() {
        setOptionsData({})
        setOptionsValueErrors({})
    }

    function handleRemoveMenuItem(item) {
        let array = data;

        let index = array.indexOf(array.find(el => el.id === item.id));

        array.splice(index, 1);

        setData(array)
        generateNestable(array)
    }

    function generateNestable(array) {
        const ids = array.map((x) => x.id);
        const result = array.map((parent) => {
            const children = array.filter((child) => {
                if (child.id !== child.parent?.id && child.parent?.id === parent.id) {
                    return true;
                }

                return false;
            });

            if (children.length) {
                parent.children = children;
            }

            return parent;
        }).filter((obj) => {
            if (obj.id === obj.parent?.id || !ids.includes(obj.parent?.id)) {
                return true;
            }

            return false;
        });

        setNestableData(result)
    }

    useEffect(() => {
        ApiService.get(`${MENU_ITEM_LIST_ROUTE}${menu_type_id}`, {
            headers: {
                'Content-Language': locale
            }
        }).then(resp => {
            setData(resp.data.data);

            generateNestable(resp.data.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    useEffect(() => {
        if (optionsData.menu_item_type || optionsData.menu_item_type === 'external') {
            ApiService.get(optionsData.menu_item_type === 'page' ? `${OPTIONS_PAGE_LIST_ROUTE}` : `${OPTIONS_PAGE_LIST_ROUTE}`).then(resp => {
                setItemsOptions((resp.data.data || []).map(el => ({...el, name: el.title})))
            }).catch(error => {
                console.log(error)
            })
        }
    }, [optionsData.menu_item_type]);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Menus'
                    description='Edit menu structure.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/widgets'
                        color='primary'
                        size='md'
                        icon='plus'
                    >
                        Menu type list
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className={['row'].join(' ').trim()}>
                        <div className='col-lg-4'>
                            <SgFormGroup>
                                <SgInput
                                    name='status'
                                    id='status'
                                    placeholder='Enter status'
                                    label='Status'
                                    value={optionsData.status || ''}
                                    onChange={handleChangeOptionsData}
                                    isInvalid={valueErrors.status}
                                    variant='select'
                                    options={statusOptions}
                                />
                            </SgFormGroup>
                            <SgFormGroup>
                                <SgInput
                                    id='menu_item_type'
                                    name='menu_item_type'
                                    label="Item Type"
                                    placeholder="Item Type"
                                    variant='select'
                                    options={itemTypeOptions}
                                    value={optionsData.menu_item_type || ''}
                                    onChange={handleChangeOptionsData}
                                />
                            </SgFormGroup>
                            {itemsOptions.length ?
                                <SgFormGroup>
                                    <SgInput
                                        id='url_id'
                                        name='url_id'
                                        label="Item"
                                        placeholder="Item"
                                        variant='select'
                                        options={itemsOptions}
                                        data_extraarraykey={`name`}
                                        value={optionsData.url_id || ''}
                                        onChange={(e) => {
                                            handleChangeOptionsData(e, `${itemsOptions.find(el => el.id === e.target.value)?.title}`);
                                        }}
                                    />
                                </SgFormGroup>
                                : ''
                            }
                            <SgFormGroup>
                                <SgInput
                                    id='name'
                                    name='name'
                                    label="Name"
                                    placeholder="Name"
                                    value={optionsData.name || ''}
                                    onChange={handleChangeOptionsData}
                                    disabled={optionsData.menu_item_type !== 'external'}
                                />
                            </SgFormGroup>
                            {optionsData.menu_item_type === 'external' ?
                                <SgFormGroup>
                                    <SgInput
                                        id='url'
                                        name='url'
                                        label="Url"
                                        placeholder="Url"
                                        value={optionsData.url || ''}
                                        onChange={handleChangeOptionsData}
                                    />
                                </SgFormGroup>
                                :
                                ''
                            }
                            <SgButtonGroup
                                gap={false}
                            >
                                <SgButton
                                    size="sm"
                                    onClick={addMenuItem}
                                >
                                    Add menu item
                                </SgButton>
                                <SgButton
                                    size="sm"
                                    color='error-outline'
                                    onClick={cancelMenuItem}
                                >
                                    Cancel
                                </SgButton>
                            </SgButtonGroup>
                        </div>
                        <div className='col-lg-8'>
                            <Nestable
                                items={nestableData}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                            <span>{item.name}</span>
                                            <SgButton
                                                size='xs'
                                                color='error'
                                                icon='trash-2'
                                                onlyIcon={true}
                                                squared={true}
                                                onClick={() => handleRemoveMenuItem(item)}
                                            >
                                                Remove
                                            </SgButton>
                                        </>
                                    )
                                }}
                                onChange={({items, dragItem, targetPath}) => {
                                    setNestableData(items)
                                }}
                                maxDepth={2}
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