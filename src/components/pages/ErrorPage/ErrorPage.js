import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import styles from "@/components/pages/ErrorPage/ErrorPage.module.scss";
import Link from "next/link";

export default function SgPageError(props) {
    const {header, mainHeader, status, description} = props;

    return (
        <>
            <Section>
                <SectionBlock>
                    <SectionBody>
                        <div className={[styles['sg--page--error']].join(' ').trim()}>
                            <div className={[styles['sg--page--error-head']].join(' ').trim()}>
                                <h2 className={[styles['sg--page--error-head--header']].join(' ').trim()}>
                                    {header}
                                </h2>
                                <h1 className={[styles['sg--page--error-head--mainHeader']].join(' ').trim()}>
                                    {mainHeader}
                                </h1>
                            </div>
                            <div className={[styles['sg--page--error-body']].join(' ').trim()}>
                                <div className={[styles['sg--page--error-body--description']].join(' ').trim()} dangerouslySetInnerHTML={{__html: description}} />
                            </div>
                        </div>
                    </SectionBody>
                </SectionBlock>
            </Section>
        </>
    )
}