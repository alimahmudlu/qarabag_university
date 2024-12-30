import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";
import ApiService from "@/services/ApiService";
import {SITE_PAGE_CHILDREN_PAGES_LIST_ROUTE, SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import {SgCollapse} from "@/components/ui/Collapse";
import styles from "@/components/sections/CollapseContent/CollapseContent.module.scss";
import GetPage from "@/pages/page/[page_id]";
import SgTemplateGetPageWidgets from "@/components/templates/GetPageWidgets/GetPageWidgets";
import SgTabItem from "@/components/ui/TabItem";
import {useRouter} from "next/router";
import SgSectionContent from "@/components/sections/Content";
import SgSectionCollapseContent from "@/components/sections/CollapseContent";
import SgTab from "@/components/ui/Tab";

export default function SgSectionTabLinkCollapse( props ) {
    const {id, data, style, mainData, page_id, staticContent} = props;
    const {image, title, description, filter = true, list = [], morePath} = data;
    const [pageList, setPageList] = useState([])

    useEffect(() => {
        ApiService.get(`${SITE_PAGE_CHILDREN_PAGES_LIST_ROUTE}/${page_id}/relations`).then(response => {
            setPageList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [page_id]);


    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionBody>
                        <div className='row gap-y-[20px]'>
                            <div className='col-lg-4'>
                                <SgTab>
                                    {(pageList || []).map((item, index) => {
                                        return (
                                            <SgTabItem
                                                key={index}
                                                path={`/page/${item?.link?.id}`}
                                                title={item?.link?.title}
                                            />
                                        )
                                    })}
                                </SgTab>
                            </div>
                            <div className='col-lg-8'>
                                <SgSectionCollapseContent
                                    style={{backgroundColor: 'unset', paddingTop: 0}}
                                    id={`collapseBanner__${page_id}`}
                                    mainData={mainData}
                                    page_id={page_id}
                                    data={{
                                        filter: false,
                                        title: title || '',
                                        description: description || '',
                                        button: {}
                                    }}
                                    staticContent={staticContent}
                                />
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}