import styles from "@/components/sections/MainHero/MainHero.module.scss";
import {Section, SectionBody} from "@/components/ui/Section";
import heroImage from "@/assets/images/KarabakhUniversityBanner2.png";
import Image from "next/image";
import {SgBreadcrumb} from "@/components/ui/Breadcrumb";

export default function SgSectionMainHero(props) {
    const {id, inner = false, header, breadcrumb = []} = props;

    return (
        <>
            <Section
                id={id}
                className={[styles['sg--section--mainHero'], inner ? styles['sg--section--mainHero--inner'] : null].join(' ').trim()}
            >
                <div className={[styles['sg--section--mainHero-absolute']].join(' ').trim()}>
                    {inner ?
                        <Image width='2000' height='2000'
                               src={heroImage}
                               className={[styles['sg--section--mainHero-absolute--background']].join(' ').trim()}
                        />
                        :
                        <video width="1000" height="1000"
                               autoPlay
                               playsInline
                               loop
                               muted={true}
                               preload="none"
                               className={[styles['sg--section--mainHero-absolute--background']].join(' ').trim()}
                        >
                            <source src='/video/heroVideo.mp4' type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    }
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