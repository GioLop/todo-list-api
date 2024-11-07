import { Dispatch, SetStateAction, useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useClickOutSide = (callback:Dispatch<SetStateAction<any>>, value:unknown) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        const { current } = containerRef;
        const { target } = event;

        if (current && !current.contains(target as Node)) {
            callback(value);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { containerRef }
};

export default useClickOutSide;