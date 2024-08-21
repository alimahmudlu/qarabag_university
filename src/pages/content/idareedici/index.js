import {MainLayout} from "@/admin/components/layouts";
import DashboardItem from "@/admin/components/ui/DashboardItem";

export default function Index() {
    return (
        <>
            <div className='row gap-y-[16px]'>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Pages'
                        description='Pages description'
                        path='/content/idareedici/pages'
                        list={[
                            {
                                name: 'List',
                                path: '/content/idareedici/pages',
                            },
                            {
                                name: 'Add',
                                path: '/content/idareedici/pages/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Posts'
                        description='Posts description'
                        path='/content/idareedici/posts'
                        list={[
                            {
                                name: 'List',
                                path: '/content/idareedici/posts',
                            },
                            {
                                name: 'Add',
                                path: '/content/idareedici/posts/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Languages'
                        description='Languages description'
                        path='/content/idareedici/languages'
                        list={[
                            {
                                name: 'List',
                                path: '/content/idareedici/languages',
                            },
                            {
                                name: 'Add',
                                path: '/content/idareedici/languages/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Data types'
                        description='Data types description'
                        path='/content/idareedici/data-types'
                        list={[
                            {
                                name: 'List',
                                path: '/content/idareedici/data-types',
                            },
                            {
                                name: 'Add',
                                path: '/content/idareedici/data-types/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Menus'
                        description='Menus description'
                        path='/content/idareedici/menus'
                        list={[
                            {
                                name: 'List',
                                path: '/content/idareedici/menus',
                            },
                            {
                                name: 'Add',
                                path: '/content/idareedici/menus/create',
                            }
                        ]}
                        length={12}
                    />
                </div>
                <div className='col-lg-4'>
                    <DashboardItem
                        header='Settings'
                        description='Settings description'
                        path='/content/idareedici/settings'
                        list={[
                            {
                                name: 'Structure',
                                path: '/content/idareedici/settings',
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