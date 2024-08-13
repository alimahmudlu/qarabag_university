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
    OPTIONS_POST_LIST_ROUTE,
    PAGE_RELATION_LIST_ROUTE,
    PAGE_RELATION_SAVE_ROUTE,
    PAGE_SAVE_ROUTE,
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import {validate} from "@/admin/utils/validate";
import {validationConstraints} from "@/admin/constants/constants";
import Nestable from "react-nestable";
import {GetMaxId} from "@/admin/utils/getMaxId";
import makeID from "@/admin/utils/makeID";


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
        const ids = object.page_id

        newData = [...newData, object];

        (datas.children || []).map((item, index) => {
            nestableItem(item, ids, index)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        nestableData.map((item, index) => {
            nestableItem(item, null, index)
        })

        ApiService.post(`${PAGE_RELATION_SAVE_ROUTE}`, {
            pages: newData
        }).then(resp => {
            router.push({
                pathname: '/admin/pages/'
            }, undefined, { scroll: true });
        }).catch(error => {
            console.log(error)
        })
    }

    function addMenuItem(e) {
        e.preventDefault();

        let errors = validate(optionsData, 'pageItemAdd', validationConstraints);

        if (Object.keys(errors).length > 0) {
            setValueErrors(errors)
        }
        else {
            setData([...data, {...optionsData, token: makeID(6), id: optionsData.page_id, new: 1}])
            setNestableData([...nestableData, {...optionsData, id: optionsData.page_id, new: 1}])

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
        setNestableData(generateNestable(array))
    }

    function generateNestable(array) {
        const ids = array.map((x) => x.token);
        const result = array.map((parent) => {
            const children = array.filter((child) => {
                if (child.token !== child.parent_token && child.parent_token === parent.token) {
                    return true;
                }

                return false;
            });

            if (children.length) {
                parent.children = children;
            }

            return parent;
        }).filter((obj) => {
            if (obj.token === obj.parent_token || !ids.includes(obj.parent_token)) {
                return true;
            }

            return false;
        });

        return result
    }

    useEffect(() => {
        ApiService.get(`${PAGE_RELATION_LIST_ROUTE}`).then(resp => {
            const _data = [...resp.data.data.map(elem => ({...elem, new: 0, parent_token: (resp.data.data || []).find(el => el.page_id === elem.parent_id)?.token}))];

            setData(_data);

            setNestableData(generateNestable(_data))
        }).catch(error => {
            console.log(error)
        })

        ApiService.get(`${OPTIONS_PAGE_LIST_ROUTE}`).then(resp => {
            setItemsOptions((resp.data.data || []).map(el => ({...el, name: el.title})))
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Page relations'
                    description='Edit page relations structure.'
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
                        <div className='col-lg-4'>
                            <SgFormGroup>
                                <SgInput
                                    id='page_id'
                                    name='page_id'
                                    label="Item"
                                    placeholder="Item"
                                    variant='select'
                                    options={itemsOptions}
                                    data_extraarraykey={`name`}
                                    value={optionsData.page_id || ''}
                                    searchAble={true}
                                    onChange={(e) => {
                                        handleChangeOptionsData(e, `${itemsOptions.find(el => el.id === e.target.value)?.title}`);
                                    }}
                                />
                            </SgFormGroup>
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
                            <SgButtonGroup
                                gap={false}
                            >
                                <SgButton
                                    size="sm"
                                    onClick={addMenuItem}
                                >
                                    Add relation item
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
                                idProp='token'
                                items={nestableData}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                            <span>{item.name || item?.page?.title}</span>
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
                                maxDepth={4}
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
                            type='link'
                            isLinked={true}
                            to='/admin/pages'
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