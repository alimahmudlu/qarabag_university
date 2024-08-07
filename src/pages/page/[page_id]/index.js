import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import {SITE_PAGE_SHOW_ROUTE} from "@/configs/apiRoutes";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgSectionContentBanner from "@/components/sections/ContentBanner";
import SgSectionGalleryBanner from "@/components/sections/GalleryBanner";
import SgSectionComplexContentBanner from "@/components/sections/ComplexContentBanner";
import SgSectionPrincipleListBanner from "@/components/sections/PrincipleListBanner";
import SgSectionListBoxContentBanner from "@/components/sections/ListBoxContentBanner";
import SgSectionMonumentsFamousBanner from "@/components/sections/MonumentsFamousBanner";
import SgSectionNewsContentBanner from "@/components/sections/NewsContentBanner";
import SgSectionNewsContent from "@/components/sections/NewsContent";
import SgSectionEventsContentBanner from "@/components/sections/EventsContentBanner";
import SgSectionEventsContent from "@/components/sections/EventsContent";
import SgSectionNewsBanner from "@/components/sections/NewsBanner";
import SgSectionEventsBanner from "@/components/sections/EventsBanner";
import SgSectionCampusBanner from "@/components/sections/CampusBanner";
import SgSectionClubsBanner from "@/components/sections/ClubsBanner";
import SgSectionMonumentsFamousBannerList from "@/components/sections/MonumentsFamousBannerList";
import SgSectionCollapseContent from "@/components/sections/CollapseContent";
import SgSectionTabContent from "@/components/sections/TabContent";
import SgTemplateGetPageWidgets from "@/components/templates/GetPageWidgets/GetPageWidgets";

export default function Index(props) {
    const {pageData, page_id, inner = true} = props;
    const {title, id, page_widgets} = pageData || {};

    return (
        <>
            <SgSectionMainHero
                id='mainHero'
                inner={inner}
                header={title || ''}
                breadcrumb={[
                    {
                        name: 'Ana səhifə',
                        to: '/'
                    },
                    {
                        name: title,
                        to: `/page/${id}`
                    },
                ]}
            />

            <SgTemplateGetPageWidgets
                page_widgets={page_widgets}
                page_id={page_id}
            />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const {query} = context;
    const {page_id} = query;
    let newQuery = {...query};

    const pageData = await ApiService.get(`${SITE_PAGE_SHOW_ROUTE}/${page_id}`)

    if(pageData.status !== 200) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            },
            props: {
                pageData: [],
                page_id: page_id
            }
        };
    }


    return {
        props: {
            pageData: pageData.data.data,
            page_id: page_id
        }
    }
}


Index.getLayout = function getLayout(page, menus, languages) {
    return (
        <>
            <SiteLayout menus={menus} languages={languages}>
                {page}
            </SiteLayout>
        </>
    )
}
