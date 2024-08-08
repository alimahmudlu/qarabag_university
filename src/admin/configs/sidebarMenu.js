import SgIcon from "@/admin/components/ui/Icon";

export const sidebarPrimaryMenu = [
    {
        name: "Dashboard",
        path: "/",
        icon: <SgIcon icon='home' />,
    },
    {
        name: "Pages",
        path: "/pages",
        icon: <SgIcon icon='layers-3' />,
        children: [
            {
                name: "List",
                path: "/pages",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/pages/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    },
    {
        name: "Posts",
        path: "/",
        icon: <SgIcon icon='layers-3' />,
        children: [
            {
                name: "List",
                path: "/posts",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/posts/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    },
    {
        name: "Language",
        path: "/",
        icon: <SgIcon icon='type' />,
        children: [
            {
                name: "List",
                path: "/languages",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/languages/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    },
    {
        name: "Data Types",
        path: "/",
        icon: <SgIcon icon='type' />,
        children: [
            {
                name: "List",
                path: "/data-types",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/data-types/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    },
    {
        name: "Widgets",
        path: "/",
        icon: <SgIcon icon='type' />,
        children: [
            {
                name: "List",
                path: "/widgets",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/widgets/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    },
    {
        name: "Menus",
        path: "/",
        icon: <SgIcon icon='type' />,
        children: [
            {
                name: "List",
                path: "/menus",
                icon: <SgIcon icon='list' />,
            },
            {
                name: "Add",
                path: "/menus/create",
                icon: <SgIcon icon='plus' />,
            },
        ]
    }
]
export const sidebarSecondaryMenu = [
    {
        name: "Settings",
        path: "/settings",
        icon: <SgIcon icon='settings' />,
    },
]