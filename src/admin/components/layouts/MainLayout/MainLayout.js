import { SgTemplateSidebar } from "@/admin/components/templates/Sidebar";
import { SgTemplateHeader } from "@/admin/components/templates/Header";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from "@/admin/components/layouts/MainLayout/MainLayout.module.scss";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";


export default function MainLayout(props) {
    const { children } = props;
    const { data: session, status } = useSession();
    const [sidebar, setSidebar] = useState(true)
    const [workspaces, setWorkspaces] = useState([])
    const [selectedWorkspace, setSelectedWorkspace] = useState({})
    const router = useRouter();

    function handleToggleSidebar() {
        setSidebar(!sidebar)
    }

    if (status === "loading") {
        return (
            <>
                LOADINGGGG
            </>
        )
    }
    else if (status !== "authenticated") {
        router.push('/content/idareedici/sign-in')
    }
    else {
        return (
            <>

                <GetGenerateMetadata
                    defaultMetas={{
                        title: 'Qarabağ universiteti - İdarəetmə paneli'
                    }}
                />
                <div className={[styles['sg--layouts--main']].join(' ').trim()}>
                    <SgTemplateSidebar
                        user={{}}
                        menu={[]}
                        isOpen={sidebar}
                        handleToggleSidebar={handleToggleSidebar}
                    />
                    <div className={[styles['sg--layouts--main-container']].join(' ').trim()}>
                        <SgTemplateHeader
                            handleToggleSidebar={handleToggleSidebar}
                            layout='main'
                        />
                        <div className={[styles['sg--layouts--main-container-content']].join(' ').trim()}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}