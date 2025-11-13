import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 md:py-28 transition-all duration-700 ease-out relative ${className} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;