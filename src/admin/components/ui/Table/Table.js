import React, {useState, useEffect} from "react";
import ApiService from "@/admin/services/ApiService";
import SgPagination from "@/admin/components/ui/Pagination";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import styles from "@/admin/components/ui/Table/Table.module.scss";

/**
 * <SgTable
 *     tableData={{
 *         data: [
 *             {
 *                 key: 'full_name',
 *                 name: 'Ad Soyad',
 *                 hidden: false,
 *                 cell: (row, key) => {
 *                     console.log(row, key)
 *                     return (
 *                         <>
 *                             <SgIcon icon={'trash'} />
 *                         </>
 *                     )
 *                 }
 *             }
 *         ],
 *         api: '/TABLE_DATA_URL',
 *         filters: {
 *             department: 1,
 *             search: 'lorem ipsum 123'
 *         }
 *     }}
 *     onClick={(e, row, index) => {console.log(e, row, index)}}
 * />
 *
 * */




export default function SgTable(props) {
    const {onClick, tableData, serverSide = true} = props;
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [hoverItemIndex, setHoverItemIndex] = useState('');

    console.log(tableData)
    function changePage(type) {
        switch (type) {
            case ('prev'):
                setPage(page > 1 ? page - 1 : page)
                break;

            case ('next'):
                setPage(page < data?.pageCount ? page + 1 : page)
                break;

            default:
                setPage(type)
        }
    }

    function changePerPage(e) {
        setPerPage(e.target.value)
    }

    function getTableAttributes() {
        let classes = {}

        switch (tableData.headColor) {
            case ('main'):
                classes.headColor = 'color-main';
                break;

            case ('minor'):
                classes.headColor = 'color-minor';
                break;

            default:
                classes.headColor = 'color-main';
                break;
        }

        switch (tableData.headTransform) {
            case ('uppercase'):
                classes.headTransform = 'text-uppercase';
                break;

            case ('lowercase'):
                classes.headTransform = 'text-lowercase';
                break;

            case ('capitalize'):
                classes.headTransform = 'text-capitalize';
                break;

            default:
                classes.headTransform = 'text-uppercase';
                break;
        }

        return Object.keys(classes).map(el => classes[el]).join(' ').trim()
    }

    function handleClick(e, row, index) {
        (onClick)?.(e, row, index)
    }

    function handleHover(index) {
        setHoverItemIndex(index)
    }

    useEffect(() => {
        if (!tableData?.customData) {
            ApiService({
                url: tableData?.api,
                method: tableData.apiMethod || 'GET',
                params: {
                    page: page,
                    per_page: perPage,
                    ...tableData.filters
                },
                data: {
                    page: page,
                    per_page: perPage,
                    ...tableData.filters
                },
                headers: tableData?.headers || {}
            }).then(el => {
                setData(el.data.data)
            }).catch(err =>
                console.log(err)
            );
        }
        else {
            setData({data: tableData?.customData})
        }
    }, [page, tableData.filters, perPage]);

    useEffect(() => {
        setPage(1)
    }, [tableData.filters]);

    return (
        <>
            <div className={[styles["table-area"]].join(' ').trim()}>
                <div className={[styles["table-area-content"]].join(' ').trim()}>
                    <div className="table-responsive">
                        <table className={[styles["table"]].join(' ').trim()}>
                            <thead>
                            <tr>
                                {(tableData?.data || []).filter(el => !el.hidden).map((el, index) =>
                                    <th key={index} className={[getTableAttributes(), el.hoverable ? styles['table--hoverable-th'] : '', el.desktopHidden ? styles['table-cell-lg-hidden'] : '', el.mobileHidden ? styles['table-cell-hidden'] : ''].join(' ').trim()}>
                                        <div className={[styles["table-group"]].join(' ').trim()}>
                                            {el.name || el.key || ''}
                                        </div>
                                    </th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {(data.data || []).map((item, itemIndex) =>
                                <tr key={itemIndex}
                                    onMouseEnter={() => handleHover(itemIndex)}
                                    onClick={(e) => handleClick(e, item, itemIndex)}
                                    className={[hoverItemIndex === itemIndex ? styles['hover'] : ''].join(' ').trim()}
                                >
                                    {(tableData?.data || []).filter(el => !el.hidden).map((el, index) => {
                                        if (el.hoverable) {
                                            return (
                                                <td key={index} className={[el.hoverable ? styles['table--hoverable-td'] : '', el.desktopHidden ? styles['table-cell-lg-hidden'] : '', el.mobileHidden ? styles['table-cell-hidden'] : ''].join(' ').trim()}>
                                                    <div className={[styles['table--hoverable-td-content']].join(' ').trim()}>
                                                        {el.cell(item, item[el.key], itemIndex)}
                                                    </div>
                                                </td>
                                            )
                                        }
                                        return (
                                            <td key={index} className={[el.desktopHidden ? styles['table-cell-lg-hidden'] : '', el.mobileHidden ? styles['table-cell-hidden'] : ''].join(' ').trim()}>
                                                {el.cell(item, item[el.key], itemIndex)}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={[styles["table-area-footer"]].join(' ').trim()}>
                    {serverSide ?
                        <>
                            <SgPagination
                                pageCount={data.last_page}
                                page={page}
                                onClick={changePage}
                            />
                            <SgFormGroup
                                className={'mb-0'}
                            >
                                <SgInput
                                    label='Element sayı'
                                    size='extraSmall'
                                    variant='select'
                                    inline={true}
                                    onChange={changePerPage}
                                    value={perPage}
                                    options={[
                                        {
                                            name: '10',
                                            id: 10
                                        },
                                        {
                                            name: '20',
                                            id: 20
                                        },
                                        {
                                            name: '50',
                                            id: 50
                                        },
                                        {
                                            name: '100',
                                            id: 100
                                        }
                                    ]}
                                />
                            </SgFormGroup>
                        </>
                        : ""
                    }
                </div>
            </div>
        </>
    )
}