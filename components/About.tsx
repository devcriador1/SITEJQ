import React, { useRef } from 'react';
import Section from './Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    return (
        <Section id="about" className="bg-light dark:bg-dark-bg-card">
             <div ref={sectionRef} className="text-center mb-12">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Sobre o Instituto São Joaquim</h2>
                <p className={`text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Nossa missão é transformar vidas através do cuidado especializado e do acolhimento.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img 
                        src="https://i.postimg.cc/sfvTqTXm/Generated-Image-November-12-2025-10-51AM.png" 
                        alt="Terapeuta do Instituto São Joaquim em uma sessão individualizada com uma criança, demonstrando a abordagem de cuidado e desenvolvimento da instituição." 
                        className="rounded-2xl shadow-soft-lg w-full h-auto object-cover aspect-[4/3]"
                    />
                </div>
                <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h3 className="text-3xl font-semibold text-primary dark:text-primary-light mb-4">Nossa Filosofia</h3>
                    <p className="text-gray-700 dark:text-stone-300 mb-4 leading-relaxed">
                        Acreditamos no potencial único de cada indivíduo. No Instituto São Joaquim, combinamos ciência, empatia e uma abordagem multidisciplinar para criar planos terapêuticos personalizados que promovem o desenvolvimento de habilidades, a autonomia e a qualidade de vida de crianças e adolescentes no espectro autista.
                    </p>
                    <p className="text-gray-700 dark:text-stone-300 leading-relaxed">
                        Nossa equipe é formada por profissionais apaixonados e altamente qualificados, dedicados a apoiar não apenas a criança, mas toda a família, oferecendo orientação, suporte e um ambiente seguro e acolhedor para todos.
                    </p>
                </div>
            </div>
             <div className="section-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-82.39,16.72-168.36,50.09-250.49,89.91C164.63,122.32,84.31,152.34,0,172.5V0H1200V5.81C1132.19,11.88,1065.71,26.84,985.66,92.83Z" className="shape-fill fill-stone-50 dark:fill-dark-bg"></path>
                </svg>
            </div>
        </Section>
    );
};

export default About;