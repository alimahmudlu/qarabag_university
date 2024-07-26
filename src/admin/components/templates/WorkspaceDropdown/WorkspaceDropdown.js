import styles from "@/admin/components/templates/WorkspaceDropdown/WorkspaceDropdown.module.scss";
import SgIcon from "@/admin/components/ui/Icon";
import Link from "next/link";
import {SgDropdown} from "@/admin/components/ui/Dropdown";

export default function SgTemplateWorkspaceDropdown(props) {
    const { id, name, slug } = props;

    return (
        <>
            <SgDropdown
                className=''
                toggleHeader={
                    <div className={styles['sg--template--workspaceDropdown-user']}>
                        <div className={styles['sg--template--workspaceDropdown-user-avatar']}>
                            {(name || '').substring(0, 1)}
                        </div>
                        <div className={styles['sg--template--workspaceDropdown-user-content']}>
                            <div className={styles['sg--template--workspaceDropdown-user-content--name']}>
                                {name}
                            </div>
                            <div className={styles['sg--template--workspaceDropdown-user-content--email']}>
                                {slug}
                            </div>
                        </div>
                    </div>
                }
                menuClassName={['p-0', styles['sg--template--workspaceDropdown-maimMenu-catalogue-menu']].join(' ').trim()}
                list={[
                    {
                        name: <Link href='/workspaces'>Workspaces</Link>
                    },
                    {
                        type: 'divider'
                    },
                    {
                        name: <Link href='/workspaces/new' className='d-flex gap-2 align-items-center'><SgIcon icon='plus' /><span>Create new workspace</span></Link>,
                    },
                ]}
            />
        </>
    )
}