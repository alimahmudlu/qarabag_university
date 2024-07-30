import styles from '@/components/ui/ContentBanner/ContentBanner.module.scss';
import Image from "next/image";
import {SgButton} from "@/components/ui/Button";

export default function SgContentBanner(props) {
    const {image, title, description, button, style, fluidContainer, fluidContainerPadding} = props;
    return (
        <>
            <div style={style} className={[styles['sg--contentBanner']].join(' ').trim()}>
                <div style={fluidContainer === 'left' ? {paddingLeft: 0} : {paddingRight: 0}} className={[styles['sg--contentBanner-image']].join(' ').trim()}>
                    <Image width='1000' height='1000'
                        src={image || ''}
                        alt={title}
                        className={[styles['sg--contentBanner-image--img']].join(' ').trim()}
                    />
                </div>
                <div style={fluidContainer === 'right' ? {paddingLeft: fluidContainerPadding} : {paddingRight: fluidContainerPadding}} className={[styles['sg--contentBanner-body']].join(' ').trim()}>
                    <div className={[styles['sg--contentBanner-body--header']].join(' ').trim()}>
                        {title}
                    </div>
                    <div className={[styles['sg--contentBanner-body--description']].join(' ').trim()}
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                    {button ?
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