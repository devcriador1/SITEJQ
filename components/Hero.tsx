import React from 'react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-stone-50 overflow-hidden">
            <NeuralNetworkCanvas />
            <div className="relative z-10 p-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">
                    Desvendando o Potencial de Cada Criança
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                    Apoio especializado e humanizado para crianças no espectro autista (TEA) e suas famílias.
                </p>
                <a 
                    href="#method" 
                    className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-dark transition-transform transform hover:scale-105 duration-300 inline-block shadow-lg"
                >
                    Conheça Nossa Abordagem
                </a>
            </div>
        </section>
    );
};

export default Hero;