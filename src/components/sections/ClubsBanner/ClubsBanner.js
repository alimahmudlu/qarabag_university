import styles from '@/components/sections/ClubsBanner/ClubsBanner.module.scss';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgClubItem from "@/components/ui/ClubItem";
import {useEffect, useState} from "react";
import ApiService from "@/services/ApiService";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";

export default function SgSectionClubsBanner(props) {
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
                style={{
                    backgroundColor: 'var(--background, #F6F6F6);'
                }}
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={'header'}
                        filter={true}
                    >
                        <SgButtonGroup>
                            <SgButton
                                color='primary-outline'
                                icon='arrow-up-right'
                                size='sm'
                                withOutBlock={true}
                                reverse={true}
                            >
                                Hamısına baxmaq
                            </SgButton>
                        </SgButtonGroup>
                    </SectionHead>
                    <SectionBody>
                        <div className='row gap-y-[20px]'>
                            {(postList || []).map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-4'>
                                        <SgClubItem
                                            image={item.image}
                                            header={item.title}
                                            path={`/page/${page_id}/${item?.id}`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}