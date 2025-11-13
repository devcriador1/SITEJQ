import React from 'react';
import Section from './Section';

const CTA: React.FC = () => {
    const WHATSAPP_LINK = "https://wa.me/5511954949734?text=Olá! Gostaria de agendar uma conversa sobre os serviços do instituto.";

    return (
        <Section id="cta" className="p-0">
            <div className="container mx-auto px-6">
                <div className="text-center rounded-2xl bg-gradient-to-br from-primary-dark to-primary py-16 px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Pronto para Dar o Próximo Passo?
                    </h2>
                    <p className="text-lg text-primary-light max-w-2xl mx-auto mb-8">
                        Nossa equipe está pronta para conversar com você, entender suas necessidades e mostrar como podemos ajudar. Agende uma visita e conheça nosso espaço.
                    </p>
                    <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-dark transition-transform transform hover:scale-105 duration-300 inline-block shadow-lg"
                    >
                        Fale Conosco Agora
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default CTA;