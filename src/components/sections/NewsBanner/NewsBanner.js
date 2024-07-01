import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgNewsSliderItem from "@/components/ui/NewsSliderItem/NewsSliderItem";

export default function SgSectionNewsBanner(props) {
    const {id, data, header} = props;

    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={header}
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
                    <div className='row'>
                            {(data || []).map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-6'>
                                        <SgNewsSliderItem
                                            image={item.image}
                                            header={item.header}
                                            path={item.path}
                                            date={item.date}
                                            duration={item.duration}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </SectionBody>
                    <SectionFooter>
                        <SgButtonGroup
                            gap={true}
                        >
                            <SgButton
                                icon='arrow-left'
                                variant='rounded'
                                color='black-outline'
                                onlyIcon={true}
                                squared={true}
                            >
                                Prev
                            </SgButton>
                            <SgButton
                                icon='arrow-right'
                                variant='rounded'
                                color='black-outline'
                                onlyIcon={true}
                                squared={true}
                            >
                                Prev
                            </SgButton>
                        </SgButtonGroup>
                    </SectionFooter>
                </SectionBlock>
            </Section>
        </>
    )
}