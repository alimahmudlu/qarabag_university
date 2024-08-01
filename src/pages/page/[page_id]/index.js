import {SiteLayout} from "@/components/layouts";
import SgSectionMainHero from "@/components/sections/MainHero";
import ApiService from "@/services/ApiService";
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
import {SITE_PAGE_SHOW_ROUTE} from "@/configs/apiRoutes";

export default function Index(props) {
    const {pageData} = props;
    const {title, id, page_widgets} = pageData || {};

    return (
        <>
            <SgSectionMainHero
                id='mainHero'
                inner={true}
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

            {(page_widgets || []).sort((a, b) => a?.widget?.order > b?.widget?.order).map((item, index) => {
                switch (item?.widget?.alias) {
                    case 'simpleContent':
                        const itemContent = item.page_widget_values.reduce((a, v) => ({ ...a, [v.meta_key.alias]: v}), {}) ;
                        console.log(itemContent, 'itemContent')
                        return (
                            <SgSectionContentBanner
                                fluidContainer={itemContent?.fluidContainer?.value === '1' ? (itemContent?.imagePositionRightSide?.value === '1' ? 'right' : 'left') : null}
                                style={{backgroundColor: itemContent?.backgroundColor?.value ? '#F6F6F6' : ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: itemContent?.image?.value,
                                    title: itemContent?.title?.value,
                                    description: itemContent?.description?.value,
                                    button: (itemContent?.buttonTitle && itemContent?.buttonUrl) ? {
                                        name: itemContent?.buttonTitle?.value,
                                        path: itemContent?.buttonUrl?.value,
                                    } : {}
                                }}
                            />
                        );

                    case 'gallery':
                        return (
                            <SgSectionGalleryBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    galleries: item?.content?.galleries || []
                                }}
                            />
                        )

                    case 'complexContent':
                        return (
                            <SgSectionComplexContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        );

                    case 'principleList':
                        return (
                            <SgSectionPrincipleListBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'orgchart':
                        return (
                            <div>
                                {/*{item?.content?.list?.length || 0}*/}
                                {/*<Tree
                                    lineWidth={'2px'}
                                    lineColor={'green'}
                                    lineBorderRadius={'0'}
                                    label={null}
                                >

                                    {(item?.content?.list || []).map(el => {
                                        return (
                                            <TreeNode key={1} label={<div>Child 2</div>}>
                                                <TreeNode label={<div>Grand Child</div>}>
                                                    <TreeNode label={<div>Great Grand Child 1</div>} />
                                                    <TreeNode label={<div>Great Grand Child 2</div>} />
                                                </TreeNode>
                                            </TreeNode>
                                        )
                                    })}
                                </Tree>*/}
                            </div>
                        )

                    case 'listBoxContent':
                        return (
                            <SgSectionListBoxContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'gallerySlider':
                        return (
                            <SgSectionMonumentsFamousBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'newsBannerContent':
                        return (
                            <SgSectionNewsContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'newsContent':
                        return (
                            <SgSectionNewsContent
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'eventsBannerContent':
                        return (
                            <SgSectionEventsContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'eventsContent':
                        return (
                            <SgSectionEventsContent
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )
                }
            })}
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
                pageData: []
            }
        };
    }

    return {
        props: {
            pageData: pageData.data.data
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
