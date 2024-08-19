import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageFooter, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import {useEffect, useState} from "react";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import ApiService from "@/admin/services/ApiService";
import {
    OPTIONS_PAGE_LIST_ROUTE,
    PAGE_RELATION_LIST_ROUTE,
    PAGE_RELATION_SAVE_ROUTE,
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
    const router = useRouter()
    const { query } = router;
    const { page_id } = query;

    function handleChangeOptionsData(e, extraArrayExtraValue) {
        changeData(e, optionsData, setOptionsData, optionsValueErrors, setOptionsValueErrors, '', '', extraArrayExtraValue);
    }

    function handleSubmit(e) {
        e.preventDefault();

        ApiService.post(`${PAGE_RELATION_SAVE_ROUTE}/${page_id}/save`, {
            pages: (data || []).map((elem, i) => ({...elem, id: elem.new ? 0 : elem.id, row: i + 1}))
        }).then(resp => {
            router.push({
                pathname: '/content/idareedici/pages/'
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
            setData([...data, {...optionsData, id: GetMaxId(data, 'id') + 1, new: 1}])

            cancelMenuItem();
        }
    }

    function cancelMenuItem() {
        setOptionsData({})
        setOptionsValueErrors({})
    }

    function handleRemoveMenuItem(item) {

        let array = [...data];

        let index = array.indexOf(array.find(el => el.id === item.id));
        console.log(item, index, array)

        if (index !== -1) {
            array.splice(index, 1);
        }

        setData(array)
    }

    useEffect(() => {
        ApiService.get(`${PAGE_RELATION_LIST_ROUTE}?page_id=${page_id}`).then(resp => {
            const _data = [...resp.data.data.map(elem => ({...elem, new: 0}))];
            setData(_data);
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
                        to='/content/idareedici/pages'
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
                                    id='link_id'
                                    name='link_id'
                                    label="Item"
                                    placeholder="Item"
                                    variant='select'
                                    options={(itemsOptions || []).map(el => ({...el, name: `${el?.name}${el?.short_description? `- (${el?.short_description})` : ''}`}))}
                                    data_extraarraykey={`name`}
                                    value={optionsData.link_id || ''}
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
                                idProp='id'
                                items={data}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                            <span>{item.name || item?.link?.title}</span>
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
                                    setData(items)
                                }}
                                maxDepth={1}
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
                            to='/content/idareedici/pages'
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