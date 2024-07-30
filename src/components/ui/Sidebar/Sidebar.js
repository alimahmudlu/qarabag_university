/*
* <SgSidebar
                list={[
                    {
                        id: 1,
                        name: 'Pedaqoji fakültə',
                        path: '/',
                    },
                    {
                        id: 2,
                        name: 'Riyaziyyat müəllimliyi',
                        path: '/',
                        active: true
                    },
                    {
                        id: 3,
                        name: 'İbtidai sinif müəllimliyi',
                        path: '/'
                    },
                    {
                        id: 4,
                        name: 'Xarici dil müəllimliyi',
                        path: '/'
                    },
                    {
                        id: 5,
                        name: 'Azərbaycan dili və ədəbiyyatı müəllimliyi',
                        path: '/'
                    },
                ]}
            />
* */

import styles from '@/components/ui/Sidebar/Sidebar.module.css'
import {SgSidebarItem} from "@/components/ui/SidebarItem";
import {SgInput} from "@/components/ui/Form";

export default function SgSidebar(props) {
    const {list} = props;

    return(
        <>
            <div className={[styles['sg--sidebar']].join(' ').trim()}>
                {
                    (list || []).map((item, index) => {
                        return(
                            <SgSidebarItem
                                key={index}
                                name={item.name}
                                path={item.path}
                                active={item.active}
                            />
                        )
                    })
                }
            </div>
            <div className={[styles['sg--sidebar-mobile']].join(' ').trim()}>
                <select className={[styles['sg--sidebar-mobile-select']].join(' ').trim()}>
                    {(list || []).map((item, index) => (
                        <option key={index} value={item.path} selected={item.active}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}