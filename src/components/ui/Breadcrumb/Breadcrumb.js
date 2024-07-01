/**
 * @names ### "SgBreadcrumb" Component;
 * @project video.edu.az
 * @company Edumedia LLC
 * @repository https://github.com/alimahmudlu/video.edu.az-nextjs
 * @lead Ali Mahmudlu <alimahmudlu@gmail.com>
 * @author Farid Yusifov <faridyusifov2003@gmail.com>
 *
 *
 * @param {object} props.
 * @property {array} data.
 *
 * @import import { SgBreadcrumb } from "@/components/ui/Breadcrumb";
 * @component   <SgBreadcrumb
                    data={[
                        {
                            name: 'Ana səhifə',
                            to: '/'
                        },
                        {
                            name: 'Peşə təhsil Təhsil',
                            to: '/'
                        },
                        {
                            name: 'Sənayə',
                            to: '/'
                        }
                    ]}
                />
 *
 */

import styles from '@/components/ui/Breadcrumb/Breadcrumb.module.scss'
import Link from 'next/link'

export default function SgBreadcrumb(props){
    const {data} = props

    return(
        <>
            <div className={styles['sg--breadcrumb']}>
                {(data || []).map((item,index) => (
                    <div key={index} className={styles['sg--breadcrumb-item']}>
                        <Link className={styles['sg--breadcrumb-item--link']} href={item.to}>{item.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}