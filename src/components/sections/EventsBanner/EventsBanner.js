import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgEventsList from "@/components/ui/EventsList";
import EventImage from "@/assets/images/eventImage.png"

export default function SgSectionEventsBanner(props) {
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
                        <SgEventsList
                            list={data}
                            image={EventImage}
                            text='Tədbirlər'
                        />
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}