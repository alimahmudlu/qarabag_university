import {SgButton} from "@/components/ui/Button";
import styles from "@/components/ui/CampusItem/CampusItem.module.scss";

export default function SgCampusItem(props) {
    const {header, description, path} = props;

    return (
        <>
            <div className={[styles['sg--campusItem']].join(' ').trim()}>
                <div className={[styles['sg--campusItem-body']].join(' ').trim()}>
                    <h5 className={[styles['sg--campusItem-body--header']].join(' ').trim()}>
                        {header}
                    </h5>
                    <p className={[styles['sg--campusItem-body--description']].join(' ').trim()}>
                        {description}
                    </p>
                </div>
                <div className={[styles['sg--campusItem-icon']].join(' ').trim()}>
                    <SgButton
                        icon='arrow-up-right'
                        variant='rounded'
                        color='black-outline'
                        onlyIcon={true}
                        squared={true}
                        type='link'
                        href={path}
                        size='md:lg sm:sm'
                    >
                        Go
                    </SgButton>
                </div>
            </div>
        </>
)
}