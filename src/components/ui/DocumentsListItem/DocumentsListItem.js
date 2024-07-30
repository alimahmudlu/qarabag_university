import styles from '@/components/ui/DocumentsListItem/DocumentsListItem.module.scss'
import {SgButton} from "@/components/ui/Button";

export default function SgDocumentsListItem(props) {
    const {header, active} = props;

    return(
        <>
            <div className={[styles['sg--documentsListItem'], active ? styles['active'] : ''].join(' ').trim()}>
                <div className={[styles['sg--documentsListItem--header']].join(' ').trim()}>
                    {header}
                </div>
                <SgButton
                    icon={'download'}
                    onlyIcon={true}
                    withOutBlock={true}
                    size={'lg'}
                />
            </div>
        </>
    )
}