import { useState, useEffect } from 'react';
import {useRouter} from "next/router";

export const useHash = () => {
    const router = useRouter();
    const [hash, setHash] = useState((typeof window !== "undefined" && window) ? window.location.hash : '');

    useEffect(() => {
        const onHashChangeStart = () => {
            setHash(window.location.hash);
        };

        router.events.on("hashChangeStart", onHashChangeStart);

        return () => {
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [router.events]);
    return hash;
};