import styles from '@/components/sections/CampusBanner/CampusBanner.module.css';
import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import SgCampusItem from "@/components/ui/CampusItem";

export default function SgSectionCampusBanner(props) {
    const {header, data, id} = props;


    return (
        <>
            <Section
                id={id}
            >
                <SectionBlock>
                    <SectionHead
                        header={header}
                    />
                    <SectionBody>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <SectionHead
                                    description="Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only. Boardroom digital giant stronger too zoom room quick-win. Done requirements can't hammer charts commitment win-win-win board."
                                />
                            </div>
                            <div className='col-lg-7'>
                                {(data || []).map((item, index) => {
                                    return (
                                        <SgCampusItem
                                            header={item.header}
                                            description={item.description}
                                            path={item.path}
                                            key={index}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}