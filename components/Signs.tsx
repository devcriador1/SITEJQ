import React from 'react';
import Section from './Section';
import { SpeechBubbleIcon, UsersIcon, CogIcon } from './icons';

interface SignCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SignCard: React.FC<SignCardProps> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
        <div className="flex items-center mb-4">
            <div className="p-3 bg-secondary-light rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-dark ml-4">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);


const Signs: React.FC = () => {
    const signs = [
        { 
            title: 'Comunicação', 
            description: 'Atraso na fala, dificuldade em iniciar ou manter conversas, repetição de palavras (ecolalia) ou uso de linguagem incomum.', 
            icon: <SpeechBubbleIcon className="w-6 h-6 text-secondary-dark" /> 
        },
        { 
            title: 'Interação Social', 
            description: 'Pouco contato visual, dificuldade em entender expressões faciais ou sentimentos de outros, e preferência por brincar sozinho.', 
            icon: <UsersIcon className="w-6 h-6 text-secondary-dark" /> 
        },
        { 
            title: 'Comportamento', 
            description: 'Interesses intensos e restritos, adesão estrita a rotinas, movimentos repetitivos (estereotipias) e sensibilidade a estímulos sensoriais.', 
            icon: <CogIcon className="w-6 h-6 text-secondary-dark" /> 
        }
    ];
    
    return (
        <Section id="signs" className="bg-light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Sinais e Diagnóstico</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Reconhecer os sinais precoces é o primeiro passo para buscar apoio. Lembre-se, um diagnóstico deve ser feito por um profissional.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {signs.map(sign => <SignCard key={sign.title} {...sign} />)}
            </div>
        </Section>
    );
};

export default Signs;