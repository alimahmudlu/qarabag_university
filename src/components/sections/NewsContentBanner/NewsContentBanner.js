import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";
import moment from "moment";

export default function SgSectionNewsContentBanner(props) {
    const {id, data, style} = props;
    const {image, title, description, list = []} = data;

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
                        <div className='row gap-y-[16px]'>
                            <div className='col-lg-6'>
                                <SgNewsItem
                                    image={list?.[0]?.image}
                                    header={list?.[0]?.title}
                                    path={list?.[0]?.path}
                                    date={moment(list?.[0]?.date).format('MMMM DD, YYYY')}
                                    time={moment(list?.[0]?.date).format('HH:mm')}
                                    ratio={{
                                        width: 588,
                                        height: 419
                                    }}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <div className='row gap-y-[16px]'>
                                    {(list || []).filter((item, index) => index !== 0).map((item, index) => {
                                        return (
                                            <div className='col-lg-6' key={index}>
                                                <SgNewsItem
                                                    image={item?.image}
                                                    header={item?.title}
                                                    path={item?.path}
                                                    size='xs'
                                                    date={moment(item?.date).format('MMMM DD, YYYY')}
                                                    time={moment(item?.date).format('HH:mm')}
                                                    ratio={{
                                                        width: 284,
                                                        height: 137
                                                    }}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}