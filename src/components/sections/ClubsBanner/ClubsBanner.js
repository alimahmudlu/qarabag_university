import styles from '@/components/sections/ClubsBanner/ClubsBanner.module.scss';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgButtonGroup from "@/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/components/ui/Button";
import SgClubItem from "@/components/ui/ClubItem";

export default function SgSectionClubsBanner(props) {
    const {id, data, header} = props;

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
                        <div className='row gap-y-[20px]'>
                            {(data || []).map((item, index) => {
                                return (
                                    <div key={index} className='col-lg-4'>
                                        <SgClubItem
                                            image={item.image}
                                            header={item.header}
                                            path={item.path}
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