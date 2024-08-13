import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";

export default function Index(props) {
    return (
        <>
            <div className='row gap-y-[16px]'>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Pages'
                        description='Pages description'
                        path='/admin/pages'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/pages',
                            },
                            {
                                name: 'Add',
                                path: '/admin/pages/create',
                            },
                            {
                                name: 'Relations',
                                path: '/admin/pages/relations',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Posts'
                        description='Posts description'
                        path='/admin/posts'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/posts',
                            },
                            {
                                name: 'Add',
                                path: '/admin/posts/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Languages'
                        description='Languages description'
                        path='/admin/languages'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/languages',
                            },
                            {
                                name: 'Add',
                                path: '/admin/languages/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Data types'
                        description='Data types description'
                        path='/admin/data-types'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/data-types',
                            },
                            {
                                name: 'Add',
                                path: '/admin/data-types/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Menus'
                        description='Menus description'
                        path='/admin/menus'
                        list={[
                            {
                                name: 'List',
                                path: '/admin/menus',
                            },
                            {
                                name: 'Add',
                                path: '/admin/menus/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Settings'
                        description='Settings description'
                        path='/admin/settings'
                        list={[
                            {
                                name: 'Structure',
                                path: '/admin/settings',
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