import styles from '@/admin/components/templates/Header/Header.module.scss';
import SgIcon from "@/admin/components/ui/Icon";
import Link from "next/link";
import {SgTemplateUserDropdown} from "@/admin/components/templates/UserDropdown";
import {useSession,signOut} from "next-auth/react";
const REQUEST_NEXT_ADMIN_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_NEXT_ADMIN_BASE_URL;

export default function SgTemplateHeader(props) {
    const { userId, workspaceId, layout, handleToggleSidebar } = props;
    const { data: session } = useSession();

    async function handleSignOut() {
        await signOut({
            redirect: false,
            callbackUrl: `${REQUEST_NEXT_ADMIN_BASE_URL}/content/idareedici`
        });
    }

    return (
        <>
            <div className={styles['sg--template--header']}>
                {layout !== 'workspace' ?
                    <div className={styles['sg--template--header-toggle']} onClick={handleToggleSidebar}>
                        <SgIcon icon='menu-2' />
                    </div>
                    :
                    <Link href='/' className={[styles['sg--template--header-logo']].join(' ').trim()}>
                        <div className={[styles['sg--template--header-logo--image']].join(' ').trim()}>
                            SG
                        </div>
                        <div className={[styles['sg--template--header-logo--header']].join(' ').trim()}>
                            AdminPanel
                        </div>
                    </Link>
                }
                <SgTemplateUserDropdown
                    user={{
                        id: session?.user?.user?.id,
                        name: session?.user?.user?.name,
                        surname: session?.user?.user?.surname,
                        email: session?.user?.user?.email,
                        avatar: null
                    }}
                    signOut={handleSignOut}
                />
            </div>
        </>
    )
}