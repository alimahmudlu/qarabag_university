import styles from '@/components/ui/EventItem/EventItem.module.scss';
import {SgIcon} from "@/components/ui/Icon";
import moment from "moment";
import {SgButton} from "@/components/ui/Button";

export default function SgEventItem(props) {
    const {date, additions = [], title, path} = props;

    return (
        <>
            <div className={[styles['sg--eventItem']].join(' ').trim()}>
                <div className={[styles['sg--eventItem-date']].join(' ').trim()}>
                    <div className={[styles['sg--eventItem-date--day']].join(' ').trim()}>
                        {moment(date).format('DD')}
                    </div>
                    <div className={[styles['sg--eventItem-date--month']].join(' ').trim()}>
                        {moment(date).format('MMMM')}
                    </div>
                </div>
                <div className={[styles['sg--eventItem-body']].join(' ').trim()}>
                    <div className={[styles['sg--eventItem-body--header']].join(' ').trim()}>
                        {title}
                    </div>
                    <div className={[styles['sg--eventItem-body-additions']].join(' ').trim()}>
                        {(additions || []).map((item, index) => {
                            return (
                                <>
                                    {item?.text ?
                                        <div key={index}
                                             className={[styles['sg--eventItem-body-additions-item']].join(' ').trim()}>
                                            <div
                                                className={[styles['sg--eventItem-body-additions-item--icon']].join(' ').trim()}>
                                                <SgIcon icon={item?.icon}/>
                                            </div>
                                            <div
                                                className={[styles['sg--eventItem-body-additions-item--text']].join(' ').trim()}>
                                                {item?.text}
                                            </div>
                                        </div>
                                        :
                                        ''
                                    }
                                </>
                            )
                        })}
                    </div>
                    <div>
                        <SgButton
                            type='link'
                            to={path}
                            color='black-outline'
                            withOutBlock={true}
                            icon={'arrow-up-right'}
                            reverse={true}
                        >
                            Daha ətraflı
                        </SgButton>
                    </div>
                </div>
            </div>
        </>
    )
}