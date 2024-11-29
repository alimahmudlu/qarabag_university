import {SgButton} from "@/components/ui/Button";
import {useEffect, useState} from "react";
import styles from "@/components/templates/ScrollToTop/ScrollToTop.module.scss";

export default function SgTemplateScrollToTop(props) {
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <SgButton
                className={[styles['sg--template--scrollToTop'], isVisible ? styles['visible'] : null].join(' ').trim()}
                icon='arrow-up'
                color='black'
                size='lg'
                onlyIcon={true}
                squared={true}
                variant='rounded'
                onClick={scrollToTop}
            >
                Prev slider
            </SgButton>
        </>
    )
}