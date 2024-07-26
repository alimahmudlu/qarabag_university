import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";

export default function Index(props) {
    return (
        <>
            <DashboardItem
                header='Pages'
                description='Pages description'
                path='/admin/dashboard'
                length={12}
            />
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}