import React from 'react';
import Section from './Section';
import { SpeechBubbleIcon, UsersIcon, CogIcon, SparklesIcon, StarIcon, HandRaisedIcon } from './icons';

interface SignCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SignCard: React.FC<SignCardProps> = ({ title, description, icon }) => (
    <div className="bg-light p-6 rounded-2xl shadow-soft border border-stone-100 h-full">
        <div className="flex items-center mb-4">
            <div className="p-3 bg-secondary-light rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-dark ml-4">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
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
        },
        {
            title: 'Sensibilidades Sensoriais',
            description: 'Reação intensa ou ausente a estímulos como sons, luzes, texturas ou toques, buscando ou evitando certas sensações de forma marcante.',
            icon: <SparklesIcon className="w-6 h-6 text-secondary-dark" />
        },
        {
            title: 'Interesses Focados',
            description: 'Paixão profunda e específica por determinados temas ou objetos, dedicando-se a eles com grande intensidade e conhecimento.',
            icon: <StarIcon className="w-6 h-6 text-secondary-dark" />
        },
        {
            title: 'Dificuldades Motoras',
            description: 'Desafios na coordenação motora fina (escrever, amarrar sapatos) ou grossa (correr, pular), podendo apresentar movimentos desajeitados.',
            icon: <HandRaisedIcon className="w-6 h-6 text-secondary-dark" />
        }
    ];
    
    return (
        <Section id="signs" className="bg-light">
            <div className="text-center mb-12">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Sinais e Diagnóstico</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">Reconhecer os sinais precoces é o primeiro passo para buscar apoio. Lembre-se, um diagnóstico deve ser feito por um profissional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {signs.map(sign => <SignCard key={sign.title} {...sign} />)}
            </div>
        </Section>
    );
};

export default Signs;