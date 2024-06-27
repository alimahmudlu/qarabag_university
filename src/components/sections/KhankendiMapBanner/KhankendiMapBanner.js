import {Section, SectionBlock, SectionHead} from "@/components/ui/Section";

export default function SgSectionKhankendiMapBanner(props) {
    const {id, header, description} = props;

    return (
        <>
            <Section
                id={id}
            >
                <div className='row'>
                    <div className='col-lg-6'>
                        <SectionHead
                            header={header}
                            description={description}
                        />
                    </div>
                </div>
            </Section>
        </>
    )
}
