import { useEffect } from 'react';
import {useHash} from "@/utils/useHash";
import {scrollToSection} from "@/utils/scrollToSection";

export default function ScrollAdjuster() {
    const hash = useHash();
    useEffect(() => {
        const section = hash.replace("#", "");
        if (section) scrollToSection(section);
    }, [hash]);

    return null;
}
