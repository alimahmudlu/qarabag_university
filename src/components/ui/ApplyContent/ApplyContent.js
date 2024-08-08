import styles from '@/components/ui/ApplyContent/ContentBanner.module.scss';
import {SgButton} from "@/components/ui/Button";

export default function SgApplyContent(props) {
    const {title,applyTitle,applyDescription ,description, button, style, reverse} = props;
    return (
        <>
            <div style={style}
                 className={[styles['sg--contentBanner'], reverse ? styles['sg--contentBanner--reverse'] : ''].join(' ').trim()}>
                <div
                    className={[styles['sg--contentBanner-body']].join(' ').trim()}>
                    <div className={[styles['sg--contentBanner-body--header']].join(' ').trim()}>
                        {title}
                    </div>
                    <div className={[styles['sg--contentBanner-body--description']].join(' ').trim()}
                         dangerouslySetInnerHTML={{__html: description}}
                    />

                </div>
                {(applyTitle || applyDescription) ?
                    <div className={[styles['sg--contentBanner-applyBox']].join(' ').trim()}>
                        <div className={[styles['sg--contentBanner-applyBox--header']].join(' ').trim()}>
                            {applyTitle}
                        </div>
                        <div className={[styles['sg--contentBanner-applyBox--description']].join(' ').trim()}
                             dangerouslySetInnerHTML={{__html: applyDescription}}
                        />
                        {(button?.path && button?.name) ?
                            <SgButton
                                type='link'
                                to={button?.path}
                                color='black'
                                icon={button.icon}
                                reverse={true}
                            >
                                {button?.name}
                            </SgButton>
                            : ''
                        }
                    </div>
                    : ''
                }

            </div>
        </>
    )
}