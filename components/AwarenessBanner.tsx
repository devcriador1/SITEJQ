import React from 'react';
import Section from './Section';

const AwarenessBanner: React.FC = () => {
    return (
        <Section id="awareness" className="p-0">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <img 
                    src="https://picsum.photos/seed/hope/1200/400"
                    alt="Banner artístico e esperançoso sobre inclusão no autismo, mostrando a silhueta de uma criança conectada a um universo de formas e luzes coloridas." 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                        AUTISMO: Conhecer para Incluir
                    </h2>
                    <p className="text-lg md:text-2xl text-white mt-4 font-light drop-shadow-md">
                        Compreensão, Aceitação e Apoio
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default AwarenessBanner;