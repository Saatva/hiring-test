import React, { useEffect } from "react";

/**
 * Simple hook to detect if user clicks
 * outside ref element
 */
export const useOnClickOutside = (
    ref: React.RefObject<HTMLUListElement>,
    handler: (event: MouseEvent | TouchEvent) => void
): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};
