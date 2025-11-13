import { useState, useEffect, useRef } from 'react';

const useScrollSpy = (sectionIds: string[], options?: IntersectionObserverInit) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        const handleIntersect: IntersectionObserverCallback = (entries) => {
            const intersectingEntries = entries.filter(entry => entry.isIntersecting);

            if (intersectingEntries.length > 0) {
                // Find the entry that is most visible in the viewport
                const mostVisibleEntry = intersectingEntries.reduce((prev, current) => {
                    return prev.intersectionRatio > current.intersectionRatio ? prev : current;
                });
                setActiveSection(mostVisibleEntry.target.id);
            }
        };
        
        // Options to make the detection more centered
        const observerOptions = options || {
             root: null,
             rootMargin: "-40% 0px -40% 0px", // a horizontal band in the middle of the screen
             threshold: 0,
        };

        observer.current = new IntersectionObserver(handleIntersect, observerOptions);

        const { current: currentObserver } = observer;

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                currentObserver.observe(element);
            }
        });

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [sectionIds, options]);

    return activeSection;
};

export default useScrollSpy;
