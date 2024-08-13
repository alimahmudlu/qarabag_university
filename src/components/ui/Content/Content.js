import styles from '@/components/ui/ContentBanner/ContentBanner.module.scss';
import {SgButton} from "@/components/ui/Button";

export default function SgContent(props) {
    const {title, description, button, style} = props;
    return (
        <>
            <div style={style} className={[styles['sg--contentBanner']].join(' ').trim()}>
                <div className={[styles['sg--contentBanner-body']].join(' ').trim()}>
                    <div className={[styles['sg--contentBanner-body--header']].join(' ').trim()}>
                        {title}
                    </div>
                    <div className={[styles['sg--contentBanner-body--description']].join(' ').trim()}
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                    {(button?.path && button?.name) ?
                        <SgButton
                            type='link'
                            to={button?.path}
                            color='primary'
                            icon={button.icon}
                            reverse={true}
                        >
                            {button?.name}
                        </SgButton>
                        : ''
                    }
                </div>
            </div>
        </>
    )
}