import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";

export default function Index(props) {
    return (
        <>
            <div className='row gap-y-[16px]'>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Site Meta'
                        description='Site Meta description'
                        path='/admin/settings/1'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/pages',
                            },
                            {
                                name: 'List',
                                path: '/admin/pages',
                            }
                        ]}
                        length={12}
                    />
                </div>
            </div>
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