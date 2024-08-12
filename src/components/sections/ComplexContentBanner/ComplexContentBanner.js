import SgContentBanner from "@/components/ui/ContentBanner";
import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";

export default function SgSectionComplexContentBanner(props) {
    const {id, data, style} = props;
    const {image1, title1, description1, image2, title2, description2} = data;

    return (
        <>
            <Section
                id={id}
                style={style}
            >
                <SectionBlock>
                    <SectionBody>
                        <div className='row'>
                            <div className='col-lg-12' key={1}>
                                <SgContentBanner
                                    // style={{backgroundColor: item?.backgroundColor || ''}}
                                    image={image1}
                                    title={title1}
                                    description={description1}
                                    button={null}
                                />
                            </div>
                            <div className='col-lg-12' key={2}>
                                <SgContentBanner
                                    // style={{backgroundColor: item?.backgroundColor || ''}}
                                    image={image2}
                                    title={title2}
                                    description={description2}
                                    button={null}
                                    reverse={true}
                                />
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}