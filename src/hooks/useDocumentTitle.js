import {useEffect, useRef} from "react";

export function useDocumentTitle(title) {
    const ref = useRef(document.title);

    useEffect(() => {
        return () => document.title = ref.current;
    }, []);

    useEffect(() => {
        document.title = title ? title : ref.current;
    }, [title]);
}