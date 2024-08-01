import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";

export default function SgSectionComplexContentBanner(props) {
    const {id, data, style} = props;
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
                                    <div className='col-lg-12' key={index}>
                                        <SgContentBanner
                                            style={{backgroundColor: item?.backgroundColor || ''}}
                                            image={item?.image}
                                            title={item?.title}
                                            description={item?.description}
                                            button={null}
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