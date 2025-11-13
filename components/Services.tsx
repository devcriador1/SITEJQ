import React, { useRef } from 'react';
import Section from './Section';
import { PuzzleIcon, MicIcon, HandIcon, BookIcon, AcademicCapIcon, UsersGroupIcon } from './icons';
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
            className={`bg-light dark:bg-dark-bg-card p-6 md:p-8 rounded-2xl border border-stone-100 dark:border-zinc-700 shadow-soft text-center transition-all duration-500 ease-out group hover:shadow-glow-secondary hover:-translate-y-2 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
             <div className="relative inline-block mb-5">
                <div className="relative inline-block p-4 bg-secondary-light rounded-full transition-all duration-300 group-hover:scale-110">
                    <div className="h-8 w-8 text-secondary-dark transition-colors duration-300">
                        {icon}
                    </div>
                </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-light mb-2">{title}</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-stone-300 leading-relaxed">{description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    const services = [
        { title: 'Terapia ABA', description: 'Análise do Comportamento Aplicada para desenvolver habilidades sociais e de comunicação.', icon: <PuzzleIcon /> },
        { title: 'Fonoaudiologia', description: 'Foco na comunicação verbal e não-verbal, deglutição e linguagem.', icon: <MicIcon /> },
        { title: 'Terapia Ocupacional', description: 'Promove a autonomia nas atividades diárias e integração sensorial.', icon: <HandIcon /> },
        { title: 'Psicopedagogia', description: 'Apoio no processo de aprendizagem e desenvolvimento cognitivo.', icon: <BookIcon /> },
        { title: 'Orientação Parental', description: 'Capacitação e suporte para pais e cuidadores, fortalecendo o desenvolvimento da criança em casa.', icon: <AcademicCapIcon /> },
        { title: 'Grupos de Habilidades Sociais', description: 'Ambiente estruturado para praticar a interação, comunicação e fazer amizades.', icon: <UsersGroupIcon /> }
    ];
    
    return (
        <Section id="services" className="bg-stone-50 dark:bg-dark-bg">
            <div className="text-center mb-12">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">Nossos Serviços</h2>
                <p className="text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto">Uma abordagem completa e integrada para o desenvolvimento pleno.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
            </div>
        </Section>
    );
};

export default Services;