import {Section, SectionBlock, SectionBody, SectionFooter, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";

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
                        Xeberler
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