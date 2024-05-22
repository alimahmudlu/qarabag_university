import styles from '@/components/layouts/SiteLayout/SiteLayout.module.css';

export default function SiteLayout(props) {
    const { children } = props;

    return (
        <>{children}</>
    )
}