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
    try {
        const pageData = await ApiService.get(`${SITE_PAGE_SHOW_ROUTE}/1`)

        console.log(pageData.data.data, 'pageData');

        return {
            props: {
                pageData: pageData.data.data || {},
                page_id: 1,
                locale: context?.locale,
            }
        }
    }
    catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            },
            props: {
                pageData: [],
                page_id: 1,
                locale: context?.locale,
            }
        };
    }
}

Index.getLayout = function getLayout(page, menus, languages, settings, locale, staticContent) {
    return (
        <SiteLayout menus={menus} languages={languages} settings={settings} locale={locale} staticContent={staticContent}>
            {page}
        </SiteLayout>
    )
}