import React from 'react';
import Section from './Section';

const WhyABA: React.FC = () => {
    return (
        <Section id="why-aba" className="bg-light">
             <div className="section-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-82.39,16.72-168.36,50.09-250.49,89.91C164.63,122.32,84.31,152.34,0,172.5V0H1200V5.81C1132.19,11.88,1065.71,26.84,985.66,92.83Z" className="shape-fill" style={{ fill: '#fafaf9' }}></path>
                </svg>
            </div>
            <div className="text-center">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Por que a Terapia ABA?</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                    A Análise do Comportamento Aplicada (ABA) é uma abordagem terapêutica com vasta comprovação científica na promoção de habilidades sociais, de comunicação e de aprendizado em indivíduos com autismo, visando sempre a melhoria da sua qualidade de vida.
                </p>
            </div>
        </Section>
    );
};

export default WhyABA;