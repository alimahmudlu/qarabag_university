import styles from "@/components/sections/MainHero/MainHero.module.scss";
import {Section, SectionBody} from "@/components/ui/Section";
import heroImage from "@/assets/images/hero.png";
import Image from "next/image";
import {SgBreadcrumb} from "@/components/ui/Breadcrumb";

export default function SgSectionMainHero(props) {
    const {id, inner = false, header, breadcrumb = []} = props;

    return (
        <>
            <Section
                id={id}
                className={[styles['sg--section--mainHero']].join(' ').trim()}
            >
                <div className={[styles['sg--section--mainHero-absolute']].join(' ').trim()}>
                    <Image
                        src={heroImage}
                        alt={'hero'}
                        className={[styles['sg--section--mainHero-absolute--background']].join(' ').trim()}
                    />
                </div>
                {inner ?
                    <SectionBody
                        className={styles['sg--section--mainHero-content']}
                    >
                        {breadcrumb.length > 0 ?
                            <SgBreadcrumb
                                data={breadcrumb}
                            />
                            : ''
                        }
                        {header ?
                            <h2 className={styles['sg--section--mainHero-content--header']}>
                                {header}
                            </h2>
                            : ''
                        }
                    </SectionBody>
                    : ''
                }
            </Section>
        </>
    )
}