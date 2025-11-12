import React from 'react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-light overflow-hidden">
            <NeuralNetworkCanvas />
            <div className="relative z-10 p-6">
                <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-4 drop-shadow-md animate-slide-in-up">
                    Desvendando o Potencial de Cada Criança
                </h1>
                <p className="text-lg md:text-xl text-dark max-w-2xl mx-auto mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                    Apoio especializado e humanizado para crianças no espectro autista (TEA) e suas famílias.
                </p>
                <a
                    href="#method"
                    className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-transform transform hover:scale-105 duration-300 animate-slide-in-up shadow-lg"
                    style={{ animationDelay: '0.4s' }}
                >
                    Conheça Nossa Abordagem
                </a>
            </div>
        </section>
    );
};

export default Hero;
