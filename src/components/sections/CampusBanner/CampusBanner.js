import styles from '@/components/sections/CampusBanner/CampusBanner.module.css';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgCampusItem from "@/components/ui/CampusItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionCampusBanner(props) {
    const {id, data, style, mainData, page_id} = props;
    const {image, title, description, list = []} = data;
    const [postList, setPostList] = useState([])

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}/data_type`).then((response) => {
            setPostList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);


    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={'header'}
                    />
                    <SectionBody>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <SectionHead
                                    description="Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only. Boardroom digital giant stronger too zoom room quick-win. Done requirements can't hammer charts commitment win-win-win board."
                                />
                            </div>
                            <div className='col-lg-7'>
                                {(postList || []).map((item, index) => {
                                    return (
                                        <SgCampusItem
                                            header={item.title}
                                            description={item.content}
                                            path={`/page/${page_id}/${item?.id}`}
                                            key={index}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}