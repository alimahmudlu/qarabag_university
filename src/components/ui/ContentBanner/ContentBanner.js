import styles from '@/components/ui/ContentBanner/ContentBanner.module.scss';
import Image from "next/image";
import {SgButton} from "@/components/ui/Button";

export default function SgContentBanner(props) {
    const {image, title, description, button, style, fluidContainer, fluidContainerPadding, reverse} = props;
    console.log(title, fluidContainer, fluidContainerPadding)
    return (
        <>
            <div style={style} className={[styles['sg--contentBanner'], reverse ? styles['sg--contentBanner--reverse'] : ''].join(' ').trim()}>
                <div style={fluidContainer ? (fluidContainer === 'left' ? {paddingLeft: 0} : {paddingRight: 0}) : null} className={[styles['sg--contentBanner-image']].join(' ').trim()}>
                    <Image width='1000' height='1000'
                        src={image || ''}
                        alt={title}
                        className={[styles['sg--contentBanner-image--img']].join(' ').trim()}
                    />
                </div>
                <div style={fluidContainer ? (fluidContainer === 'right' ? {paddingLeft: fluidContainerPadding ? fluidContainerPadding : '12px'} : {paddingRight: fluidContainerPadding ? fluidContainerPadding : '12px'}) : null} className={[styles['sg--contentBanner-body']].join(' ').trim()}>
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
                            color='primary-outline'
                            icon={button.icon ? button.icon : 'arrow-up-right'}
                            animations={!button.icon ? {
                                icon: [
                                    {
                                        type: 'hover',
                                        value: 'rotate-45'
                                    }
                                ]
                            } : {}}
                            reverse={true}
                            download={!!button?.downloadButton}
                            size='md:lg sm:sm'
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