import styles from '@/admin/components/templates/Sidebar/Sidebar.module.scss';
import Link from "next/link";
import {sidebarPrimaryMenu, sidebarSecondaryMenu} from "@/admin/configs/sidebarMenu";
import SgSideBarMenuItem from "@/admin/components/templates/Sidebar/SideBarMenuItem";
import {signOut, useSession} from "next-auth/react";
const REQUEST_NEXT_ADMIN_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_NEXT_ADMIN_BASE_URL;

export default function SgTemplateSidebar(props) {
    const { user = {}, menu = [], isOpen, handleToggleSidebar } = props;
    const { data: session } = useSession();

    async function handleSignOut() {
        await signOut({
            redirect: false,
            callbackUrl: `${REQUEST_NEXT_ADMIN_BASE_URL}/content/idareedici`
        });
    }

    return (
        <>
            <div className={[styles['sg--template--sidebar'], isOpen ? styles['sg--template--sidebar--open'] : ''].join(' ').trim()}>
                <div className={[styles['sg--template--sidebar-head']].join(' ').trim()}>
                    <Link href='/content/idareedici' className={[styles['sg--template--sidebar-head-logo']].join(' ').trim()}>
                        <div className={[styles['sg--template--sidebar-head-logo--image']].join(' ').trim()}>
                            SG
                        </div>
                        <div className={[styles['sg--template--sidebar-head-logo--header']].join(' ').trim()}>
                            AdminPanel
                        </div>
                    </Link>
                    {/*<div onClick={handleToggleSidebar}
                         className={[styles['sg--template--sidebar-head--toggle']].join(' ').trim()}
                    >
                        <SgIcon icon='menu-2' />
                    </div>*/}
                </div>
                <div className={[styles['sg--template--sidebar-body']].join(' ').trim()}>
                    <div className={[styles['sg--template--sidebar-body-menu']].join(' ').trim()}>
                        {(sidebarPrimaryMenu || []).map((item, index) =>
                            <SgSideBarMenuItem
                                isOpen={isOpen}
                                key={index}
                                item={{...item, path: `/content/idareedici${item.path}`}}
                                index={index}
                            />
                        )}
                    </div>
                    <div className={[styles['sg--template--sidebar-body-menu'], 'mt-auto'].join(' ').trim()}>
                        {(sidebarSecondaryMenu || []).map((item, index) =>
                            <SgSideBarMenuItem
                                key={index}
                                item={{...item, path: `/content/idareedici${item.path}`}}
                                index={index}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}