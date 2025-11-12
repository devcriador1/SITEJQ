import React from 'react';
import Section from './Section';

const WhyABA: React.FC = () => {
    return (
        <Section id="why-aba" className="bg-light">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Por que a Terapia ABA?</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    A Análise do Comportamento Aplicada (ABA) é uma abordagem terapêutica com vasta comprovação científica na promoção de habilidades sociais, de comunicação e de aprendizado em indivíduos com autismo, visando sempre a melhoria da sua qualidade de vida.
                </p>
            </div>
        </Section>
    );
};

export default WhyABA;
