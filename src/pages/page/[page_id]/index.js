import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import {SITE_PAGE_SHOW_ROUTE} from "@/configs/apiRoutes";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgTemplateGetPageWidgets from "@/components/templates/GetPageWidgets/GetPageWidgets";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";
import SgHelperTranslate from "@/components/helper/Translate";

export default function Index(props) {
    const {pageData, page_id, inner = true, staticContent} = props;
    const {title, short_description, id, page_widgets} = pageData || {};

    return (
        <>
            <GetGenerateMetadata
                meta={{
                    title: title,
                    description: short_description,
                }}
            />
            <SgSectionMainHero
                id='mainHero'
                inner={inner}
                header={title || ''}
                breadcrumb={[
                    {
                        name: <SgHelperTranslate
                            defaultText={'Ana səhifə'}
                            translatedText={staticContent?.heroBreadcrumb__mainPage__text}
                        />,
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
                staticContent={staticContent}
            />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const {query} = context;
    const {page_id} = query;

    try {
        const pageData = await ApiService.get(`${SITE_PAGE_SHOW_ROUTE}/${page_id}`, {headers: {
                "Content-Language": context.locale || 'az'
            }});


        return {
            props: {
                pageData: pageData.data.data,
                page_id: page_id
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
                page_id: page_id
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
