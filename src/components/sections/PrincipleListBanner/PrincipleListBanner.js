import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgPrincipleList from "@/components/ui/PrincipleList";
import {useEffect, useState} from "react";
import {Axios} from "axios";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionPrincipleListBanner(props) {
    const {id, data, style, mainData} = props;
    const {image, title, description, list = []} = data;
    const [postList, setPostList] = useState([])

    useEffect(() => {
        ApiService.get(`${SITE_POST_LIST_ROUTE}/${mainData?.data_type_id}`).then((response) => {
            setPostList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SectionHead
                        header={title}
                    />
                    <SectionBody>
                        <SgPrincipleList
                            data={postList || []}
                        />
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}