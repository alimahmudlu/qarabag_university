/*
* <SgVacancyCard
                header='Mühasibatlıq şöbəsi mühasib vəzifəsi'
                workTime='Tam iş günü'
                location='Bakı şəhəri, Azərbaycan'
                deadline='05 may 2024'
            />
* */

import styles from '@/components/ui/VacancyCard/VacancyCard.module.css';
import {SgButton} from "@/components/ui/Button";
import {SgIcon} from "@/components/ui/Icon";
import SgHelperTranslate from "@/components/helper/Translate";
import moment from "moment";
import {useRouter} from "next/router";

export default function SgVacancyCard(props) {
    const {header, workTime, location, deadline, path,staticContent} = props;
    const router = useRouter();
    const {locale} = router

    return(
        <>
            <div className={[styles['sg--vacancyCard']].join(' ').trim()}>
                <div className={[styles['sg--vacancyCard-content']].join('').trim()}>
                    <h5 className={[styles['sg--vacancyCard-content--header']].join('').trim()}>
                        {header}
                    </h5>
                    <div className={[styles['sg--vacancyCard-content--button']].join('').trim()}>
                        <SgButton
                            color='primary'
                            icon='arrow-up-right'
                            animations={{
                                icon: [
                                    {
                                        type: 'hover',
                                        value: 'rotate-45'
                                    }
                                ]
                            }}
                            reverse={true}
                            block={true}
                            type='link'
                            to={path}
                        >
                            {<SgHelperTranslate
                                defaultText={'Daha ətraflı'}
                                translatedText={staticContent?.vacancyCard__more__link}
                            />}
                        </SgButton>
                    </div>
                    <div className={[styles['sg--vacancyCard-content-info']].join('').trim()}>
                        <span className={[styles['sg--vacancyCard-content-info--workTime']].join('').trim()}>
                            {workTime}
                        </span>
                        <p className={[styles['sg--vacancyCard-content-info--text']].join('').trim()}>
                            <SgIcon
                                icon={'location'}
                                color={'#44766C'}
                            />
                            {location}
                        </p>
                        <p className={[styles['sg--vacancyCard-content-info--text']].join('').trim()}>
                            <SgIcon
                                icon={'calendar'}
                                color={'#44766C'}
                            />
                            {<SgHelperTranslate
                                defaultText={'Son müraciət tarixi:'}
                                translatedText={staticContent?.vacancyCard__lastApplyDate__text}
                            />} {moment(deadline).locale(locale).format('DD.MM.YYYY')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}