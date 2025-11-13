import React from 'react';
import Section from './Section';

const Method: React.FC = () => {
    return (
        <Section id="method" className="bg-stone-50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Nosso Método</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Nossa abordagem é centrada na criança, utilizando práticas baseadas em evidências para promover o desenvolvimento e a autonomia. Cada plano terapêutico é individualizado, construído a partir de uma avaliação detalhada e em constante colaboração com a família.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                     <img 
                        src="https://i.postimg.cc/wvvZMHkt/Blue-And-Orange-Playful-Creative-Autism-Awareness-Presentation.gif" 
                        alt="Infográfico animado sobre o método do Instituto, mostrando os pilares de avaliação, plano individualizado, terapias e parceria com a família." 
                        className="rounded-2xl shadow-soft-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Method;