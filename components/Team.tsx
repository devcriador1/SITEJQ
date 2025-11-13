import React, { useRef } from 'react';
import Section from './Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Team: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    return (
        <Section id="team" className="bg-light dark:bg-dark-bg-card">
             <div ref={sectionRef} className="text-center mb-12">
                 <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Uma Equipe Multidisciplinar Dedicada</h2>
                <p className={`text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Nossos especialistas colaboram para criar um plano de desenvolvimento único para cada criança.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                     <img 
                        src="https://i.postimg.cc/52JM8fSk/Capa-para-facebook-abril-azul-autismo-moderno-ilustrado-azul-e-cinza.png" 
                        alt="Ilustração representando a equipe multidisciplinar do instituto, com profissionais colaborando para apoiar uma criança." 
                        className="rounded-2xl shadow-soft-lg w-full h-auto object-cover aspect-video"
                    />
                </div>
                <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h3 className="text-3xl font-semibold text-primary dark:text-primary-light mb-4">A Força da Colaboração</h3>
                    <p className="text-gray-700 dark:text-stone-300 mb-4 leading-relaxed">
                        O sucesso de nossas intervenções está na força de uma equipe coesa e multidisciplinar. Contamos com psicólogos especializados em ABA, fonoaudiólogos, terapeutas ocupacionais e psicopedagogos que trabalham em total sinergia. Essa colaboração permite uma visão 360º sobre as necessidades de cada criança, garantindo um plano terapêutico verdadeiramente integrado e eficaz.
                    </p>
                    <p className="text-gray-700 dark:text-stone-300 mb-4 leading-relaxed">
                        Nossos profissionais estão em constante atualização, buscando as mais recentes pesquisas e práticas baseadas em evidências. Mais do que especialistas, são pessoas apaixonadas pelo desenvolvimento humano, dedicadas a construir um vínculo de confiança com cada criança e sua família.
                    </p>
                    <p className="text-gray-700 dark:text-stone-300 leading-relaxed">
                        Acreditamos que a parceria com a família é fundamental. Por isso, mantemos uma comunicação aberta e transparente, envolvendo os pais e cuidadores em cada etapa do processo terapêutico.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Team;