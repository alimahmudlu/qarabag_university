import SgSectionContentBanner from "@/components/sections/ContentBanner";
import SgSectionGalleryBanner from "@/components/sections/GalleryBanner";
import SgSectionComplexContentBanner from "@/components/sections/ComplexContentBanner";
import SgSectionPrincipleListBanner from "@/components/sections/PrincipleListBanner";
import SgSectionListBoxContentBanner from "@/components/sections/ListBoxContentBanner";
import SgSectionMonumentsFamousBanner from "@/components/sections/MonumentsFamousBanner";
import SgSectionNewsContentBanner from "@/components/sections/NewsContentBanner";
import SgSectionNewsContent from "@/components/sections/NewsContent";
import SgSectionNewsBanner from "@/components/sections/NewsBanner";
import SgSectionEventsContentBanner from "@/components/sections/EventsContentBanner";
import SgSectionEventsContent from "@/components/sections/EventsContent";
import SgSectionEventsBanner from "@/components/sections/EventsBanner";
import SgSectionClubsBanner from "@/components/sections/ClubsBanner";
import SgSectionCampusBanner from "@/components/sections/CampusBanner";
import SgSectionMonumentsFamousBannerList from "@/components/sections/MonumentsFamousBannerList";
import SgSectionCollapseContent from "@/components/sections/CollapseContent";
import SgSectionTabContent from "@/components/sections/TabContent";
import SgSectionTabLinkContent from "@/components/sections/TabLinkContent";

export default function SgTemplateGetPageWidgets(props) {
    const {page_widgets, page_id, firstSectionPadding = false} = props;

    return (
        <div className={firstSectionPadding ? 'firstSectionPadding' : ''}>
            {(page_widgets || []).sort((a, b) => a?.widget?.order > b?.widget?.order).map((item, index) => {
                const itemContent = item.page_widget_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {}) ;
                switch (item?.widget?.alias) {
                    case 'simpleContent':
                        return (
                            <SgSectionContentBanner
                                reverse={!!itemContent?.imagePositionRightSide?.value}
                                fluidContainer={itemContent?.fluidContainer?.value === '1' ? (itemContent?.imagePositionRightSide?.value === '1' ? 'right' : 'left') : null}
                                style={{backgroundColor: itemContent?.backgroundColor?.value ? '#F6F6F6' : ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
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

                    case 'galleryBanner':
                        return (
                            <SgSectionGalleryBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: itemContent?.image?.value,
                                    title: itemContent?.titleGallery?.value,
                                    description: itemContent?.description?.value,
                                    galleries: (itemContent?.images?.value && itemContent?.images?.value.split(',').length) ? itemContent?.images?.value.split(',') : []
                                }}
                            />
                        )

                    case 'complexContentBanner':
                        return (
                            <SgSectionComplexContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image1: itemContent?.image1?.value,
                                    title1: itemContent?.title1?.value,
                                    description1: itemContent?.description1?.value,
                                    image2: itemContent?.image2?.value,
                                    title2: itemContent?.title2?.value,
                                    description2: itemContent?.description2?.value,
                                }}
                            />
                        );

                    case 'principleListBanner':
                        return (
                            <SgSectionPrincipleListBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: item?.content?.image,
                                    title: 'item?.content?.title',
                                    description: item?.content?.description
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
                                mainData={item}
                                page_id={page_id}
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
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: item?.content?.image,
                                    title: item?.content?.title,
                                    description: item?.content?.description,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'newsContentBanner':
                        return (
                            <SgSectionNewsContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'newsFilterContent':
                        return (
                            <SgSectionNewsContent
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'newsBannerSlider':
                        return (
                            <SgSectionNewsBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'eventsSliderBanner':
                        return (
                            <SgSectionEventsContentBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'eventsFilterContent':
                        return (
                            <SgSectionEventsContent
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'eventsListBanner':
                        return (
                            <SgSectionEventsBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'clubsBanner':
                        return (
                            <SgSectionClubsBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'campusBanner':
                        return (
                            <SgSectionCampusBanner
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    filter: item?.content?.filter,
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'GallerySliderList':
                        return (
                            <SgSectionMonumentsFamousBannerList
                                style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                key={index}
                                id={`contentBanner__${item.id}`}
                                mainData={item}
                                page_id={page_id}
                                data={{
                                    image: item?.image,
                                    title: item?.title,
                                    description: item?.content,
                                    list: item?.content?.list
                                }}
                            />
                        )

                    case 'collapseContent':
                        return (
                            <>
                                <SgSectionCollapseContent
                                    style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                    key={index}
                                    id={`contentBanner__${item.id}`}
                                    mainData={item}
                                    page_id={page_id}
                                    data={{
                                        filter: item?.content?.filter,
                                        image: item?.image,
                                        title: item?.title,
                                        description: item?.content,
                                        list: item?.content?.list
                                    }}
                                />
                            </>
                        )

                    case 'tabContent':
                        return (
                            <>
                                <SgSectionTabContent
                                    style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                    key={index}
                                    id={`contentBanner__${item.id}`}
                                    mainData={item}
                                    page_id={page_id}
                                    data={{
                                        filter: item?.content?.filter,
                                        image: item?.image,
                                        title: item?.title,
                                        description: item?.content,
                                        list: item?.content?.list
                                    }}
                                />
                            </>
                        )

                    case 'tabLinkContent':
                        return (
                            <>
                                <SgSectionTabLinkContent
                                    style={{backgroundColor: item?.content?.backgroundColor || ''}}
                                    key={index}
                                    id={`contentBanner__${item.id}`}
                                    mainData={item}
                                    page_id={page_id}
                                    data={{
                                        filter: item?.content?.filter,
                                        image: item?.image,
                                        title: item?.title,
                                        description: item?.content,
                                        list: item?.content?.list
                                    }}
                                />
                            </>
                        )
                }
            })}
        </div>
    )
}