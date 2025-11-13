import React from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    return (
        <section
            id={id}
            className={`py-24 relative ${className}`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {children}
            </div>
        </section>
    );
};

export default Section;