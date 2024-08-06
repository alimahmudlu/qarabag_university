import GetPage from "@/pages/page/[page_id]/index"
import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import {SITE_PAGE_SHOW_ROUTE} from "@/configs/apiRoutes";

export default function Index(props) {
    return (
        <>
            <GetPage {...props} inner={false}/>
        </>
    );
}

export const getServerSideProps = async (context) => {

    const pageData = await ApiService.get(`${SITE_PAGE_SHOW_ROUTE}/27`)

    if(pageData.status !== 200) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            },
            props: {
                pageData: [],
                page_id: 27
            }
        };
    }


    return {
        props: {
            pageData: pageData.data.data,
            page_id: 27
        }
    }
}

Index.getLayout = function getLayout(page, menus, languages) {
    return (
        <SiteLayout menus={menus} languages={languages}>
            {page}
        </SiteLayout>
    )
}