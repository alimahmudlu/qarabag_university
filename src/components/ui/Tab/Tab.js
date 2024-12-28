import styles from '@/components/ui/Tab/Tab.module.scss';

export default function SgTab(props) {
    const {children} = props;

    return (
        <>
            <div className={[styles['sg--tab']].join(' ').trim()}>
                {children}
            </div>
        </>
    )
}