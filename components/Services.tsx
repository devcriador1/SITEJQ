import React, { useRef } from 'react';
import Section from './Section';
import { PuzzleIcon, MicIcon, HandIcon, BookIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

    return (
        <div
            ref={ref}
            className={`bg-white p-6 md:p-8 rounded-xl shadow-soft text-center transition-all duration-500 ease-out group hover:shadow-soft-lg hover:-translate-y-2 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative inline-block mb-5">
                <div className="absolute -inset-2 bg-gradient-to-br from-secondary/20 to-secondary-light/20 rounded-full blur opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                <div className="relative inline-block p-4 bg-secondary-light rounded-full transition-all duration-300 group-hover:scale-110">
                    <div className="h-8 w-8 text-secondary-dark transition-colors duration-300">
                        {icon}
                    </div>
                </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    const services = [
        { title: 'Terapia ABA', description: 'Análise do Comportamento Aplicada para desenvolver habilidades sociais e de comunicação.', icon: <PuzzleIcon /> },
        { title: 'Fonoaudiologia', description: 'Foco na comunicação verbal e não-verbal, deglutição e linguagem.', icon: <MicIcon /> },
        { title: 'Terapia Ocupacional', description: 'Promove a autonomia nas atividades diárias e integração sensorial.', icon: <HandIcon /> },
        { title: 'Psicopedagogia', description: 'Apoio no processo de aprendizagem e desenvolvimento cognitivo.', icon: <BookIcon /> }
    ];
    
    return (
        <Section id="services" className="bg-light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Nossos Serviços</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Uma abordagem completa e integrada para o desenvolvimento pleno.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
            </div>
        </Section>
    );
};

export default Services;