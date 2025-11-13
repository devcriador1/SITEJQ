import React from 'react';
import Section from './Section';

const WhyABA: React.FC = () => {
    return (
        <Section id="why-aba" className="bg-light dark:bg-dark-bg-card">
             <div className="section-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-82.39,16.72-168.36,50.09-250.49,89.91C164.63,122.32,84.31,152.34,0,172.5V0H1200V5.81C1132.19,11.88,1065.71,26.84,985.66,92.83Z" className="shape-fill fill-stone-50 dark:fill-dark-bg"></path>
                </svg>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">Por que a Terapia ABA?</h2>
                    <p className="text-xl text-gray-600 dark:text-stone-300 leading-relaxed">
                        A Análise do Comportamento Aplicada (ABA) é uma abordagem terapêutica com vasta comprovação científica na promoção de habilidades sociais, de comunicação e de aprendizado em indivíduos com autismo, visando sempre a melhoria da sua qualidade de vida.
                    </p>
                </div>
                <div>
                     <img 
                        src="https://i.postimg.cc/HxR2Xs5N/Blue-And-White-Modern-Understanding-Awareness-Educational-Understanding-Autism-Early-Signs-Presentat.gif" 
                        alt="Infográfico animado explicando os benefícios da Terapia ABA, como o desenvolvimento de habilidades e a promoção da autonomia." 
                        className="rounded-2xl shadow-soft-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </Section>
    );
};

export default WhyABA;