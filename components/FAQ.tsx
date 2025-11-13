import React, { useState } from 'react';
import Section from './Section';

// FIX: Refactored FaqItem to use React.FC and a props interface for proper typing.
interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-stone-100">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 flex justify-between items-center focus:outline-none group">
                <span className="text-lg font-medium text-dark group-hover:text-primary transition-colors">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                   <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
             <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="pb-4 text-gray-600 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    )
}

const FAQ: React.FC = () => {
    const faqs = [
        { 
            question: "O que é o Transtorno do Espectro Autista (TEA)?", 
            answer: "O TEA é um distúrbio do neurodesenvolvimento que afeta a comunicação, interação social e o comportamento. Cada indivíduo no espectro é único, com diferentes habilidades e necessidades de suporte, e nosso objetivo é ajudá-los a atingir seu máximo potencial." 
        },
        { 
            question: "Quais são os primeiros sinais do autismo?", 
            answer: "Alguns sinais precoces podem incluir dificuldade de contato visual, atraso na fala, interesses muito restritos e comportamentos repetitivos. É importante lembrar que apenas um profissional qualificado pode realizar o diagnóstico." 
        },
        { 
            question: "O que devo fazer se suspeito que meu filho tem autismo?", 
            answer: "O primeiro passo é procurar um médico especialista, como um neuropediatra ou psiquiatra infantil, para uma avaliação completa. Um diagnóstico profissional é crucial. Sinta-se à vontade para nos contatar para uma conversa inicial, podemos orientar sobre os próximos passos e oferecer nosso apoio." 
        },
        { 
            question: "Como funciona a Terapia ABA?", 
            answer: "A Análise do Comportamento Aplicada (ABA) foca em entender o porquê dos comportamentos e ensinar novas habilidades através de reforço positivo. O objetivo é ampliar a comunicação, a interação social e a independência da criança, sempre de forma lúdica, ética e individualizada." 
        },
        { 
            question: "Com que idade meu filho pode começar a terapia?", 
            answer: "Não há uma idade 'certa', mas a intervenção precoce é altamente recomendada. Quanto mais cedo a criança começar a receber o suporte adequado, maiores são as oportunidades de desenvolvimento. Estamos preparados para acolher crianças de diversas idades." 
        },
        { 
            question: "Meu filho precisa de outras terapias além da ABA?", 
            answer: "Sim, muitas vezes a abordagem multidisciplinar é a mais eficaz. Terapias como fonoaudiologia, terapia ocupacional e psicopedagogia são essenciais e trabalham em conjunto com a ABA para um desenvolvimento mais completo e integrado, abordando todas as necessidades da criança." 
        },
        {
            question: "Como a família participa do processo terapêutico?",
            answer: "A participação da família é um dos pilares do nosso trabalho. Vemos os pais e cuidadores como parceiros essenciais. Oferecemos orientação, treinamento parental e apoio contínuo para que as estratégias da terapia sejam aplicadas em casa, fortalecendo o desenvolvimento da criança em todos os ambientes."
        },
        {
            question: "Quanto tempo dura o tratamento?",
            answer: "A duração da terapia varia para cada criança, pois depende de suas necessidades individuais e dos objetivos traçados. O plano terapêutico é dinâmico e reavaliado periodicamente para acompanhar o progresso. Nosso foco é no desenvolvimento contínuo e no bem-estar do seu filho, não em um prazo fixo."
        }
    ];
    return (
        <Section id="faq" className="bg-stone-50">
            <div className="text-center mb-12">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Perguntas Frequentes</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Tirando suas dúvidas sobre o TEA e nossas abordagens.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-light p-6 rounded-2xl shadow-soft border border-stone-100">
                {faqs.map((faq, index) => <FaqItem key={index} {...faq} />)}
            </div>
        </Section>
    );
};

export default FAQ;