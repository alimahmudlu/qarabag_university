import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';
import SgTemplateFooter from "@/components/templates/Footer";

export default function SiteLayout(props) {
    const { children } = props;

    return (
        <main
            className={[styles['sg--layouts'], styles['sg--layout--site']].join(' ').trim()}>
            <div className={[styles['sg--layout--site-content']].join(' ').trim()}>

                {children}
                <SgTemplateFooter />
            </div>
        </main>
    );
}