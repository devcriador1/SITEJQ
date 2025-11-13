import React from 'react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import { useNavigation } from '../contexts/NavigationContext';

interface HeroProps {
    theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
    const { navigate } = useNavigation();

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-stone-50 dark:bg-dark-bg overflow-hidden">
            <NeuralNetworkCanvas theme={theme} />
            <div className="relative z-10 p-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-dark dark:text-light">
                    Desvendando o Potencial de Cada Criança
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 dark:text-stone-300 max-w-3xl mx-auto mb-8">
                    Apoio especializado e humanizado para crianças no espectro autista (TEA) e suas famílias.
                </p>
                <a 
                    href="#method" 
                    onClick={(e) => { e.preventDefault(); navigate('method'); }}
                    className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-dark transition-transform transform hover:scale-105 duration-300 inline-block shadow-lg"
                >
                    Conheça Nossa Abordagem
                </a>
            </div>
        </section>
    );
};

export default Hero;
