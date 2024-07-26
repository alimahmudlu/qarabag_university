/*
* <SgDocumentsList
                list={[
                    {
                        id: 1,
                        header: 'Qarabağ Universitetinin Nizamnaməsi (PDF)'
                    },
                    {
                        id: 2,
                        header: 'Qarabağ Universitetinin Nizamnaməsi (PDF)',
                        active: true
                    },
                    {
                        id: 3,
                        header: 'Qarabağ Universitetinin Nizamnaməsi (PDF)'
                    },
                    {
                        id: 4,
                        header: 'Qarabağ Universitetinin Nizamnaməsi (PDF)'
                    },
                    {
                        id: 5,
                        header: 'Qarabağ Universitetinin Nizamnaməsi (PDF)'
                    },
                ]}
            />
* */

import styles from '@/components/ui/DocumentsList/DocumentsList.module.scss'
import {SgDocumentsListItem} from "@/components/ui/DocumentsListItem";

export default function SgDocumentsList(props) {
    const {list} = props;

    return(
        <>
            <div className={[styles['sg--documentsList']].join(' ').trim()}>
                {
                    (list || []).map((item, index) => {
                        return(
                            <SgDocumentsListItem
                                key={index}
                                header={item.header}
                                active={item.active}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}