import styles from '@/admin/components/templates/Sidebar/Sidebar.module.scss';
import Link from "next/link";
import {sidebarPrimaryMenu, sidebarSecondaryMenu} from "@/admin/configs/sidebarMenu";
import SgSideBarMenuItem from "@/admin/components/templates/Sidebar/SideBarMenuItem";
import {SgTemplateUserDropdown} from "@/admin/components/templates/UserDropdown";
import {signOut, useSession} from "next-auth/react";
import SgIcon from "@/admin/components/ui/Icon";

export default function SgTemplateSidebar(props) {
    const { user = {}, menu = [], isOpen, handleToggleSidebar } = props;
    const { data: session } = useSession();

    function handleSignOut() {
        signOut()
    }

    return (
        <>
            <div className={[styles['sg--template--sidebar'], isOpen ? styles['sg--template--sidebar--open'] : ''].join(' ').trim()}>
                <div className={[styles['sg--template--sidebar-head']].join(' ').trim()}>
                    <Link href='/admin' className={[styles['sg--template--sidebar-head-logo']].join(' ').trim()}>
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
                                key={index}
                                item={{...item, path: `/admin${item.path}`}}
                                index={index}
                            />
                        )}
                    </div>
                    <div className={[styles['sg--template--sidebar-body-menu'], 'mt-auto'].join(' ').trim()}>
                        {(sidebarSecondaryMenu || []).map((item, index) =>
                            <SgSideBarMenuItem
                                key={index}
                                item={{...item, path: `/admin${item.path}`}}
                                index={index}
                            />
                        )}
                    </div>

                    <hr />

                    <div className={[styles['sg--template--sidebar-body-menu']].join(' ').trim()}>
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
                </div>
            </div>
        </>
    )
}