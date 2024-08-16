import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import SgNewsItem from "@/components/ui/NewsItem";

export default function SgSectionListBoxContentBanner(props) {
    const {id, data, style,staticContent} = props;
    const {image, title, description, list = []} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SectionBody>
                        <div className='row'>
                            {(list || []).map((item, index) => {
                                return (
                                    <div className='col-lg-6 gap-y-[30px]' key={index}>
                                        <SgNewsItem
                                            staticContent={staticContent}
                                            image={item?.image}
                                            header={item?.title}
                                            description={item?.description}
                                            path={item?.path}
                                            date={null}
                                            ratio={{
                                                width: 590,
                                                height: 309
                                            }}
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