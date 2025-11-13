import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-light">
             <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Sobre o Instituto São Joaquim</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Nossa missão é transformar vidas através do cuidado especializado e do acolhimento.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <img 
                    src="https://i.postimg.cc/sfvTqTXm/Generated-Image-November-12-2025-10-51AM.png" 
                    alt="Terapeuta do Instituto São Joaquim em uma sessão individualizada com uma criança, demonstrando a abordagem de cuidado e desenvolvimento da instituição." 
                    className="rounded-2xl shadow-soft-lg w-full h-auto object-cover aspect-[4/3]"
                />
                <div>
                    <h3 className="text-3xl font-semibold text-primary mb-4">Nossa Filosofia</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Acreditamos no potencial único de cada indivíduo. No Instituto São Joaquim, combinamos ciência, empatia e uma abordagem multidisciplinar para criar planos terapêuticos personalizados que promovem o desenvolvimento de habilidades, a autonomia e a qualidade de vida de crianças e adolescentes no espectro autista.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Nossa equipe é formada por profissionais apaixonados e altamente qualificados, dedicados a apoiar não apenas a criança, mas toda a família, oferecendo orientação, suporte e um ambiente seguro e acolhedor para todos.
                    </p>
                </div>
            </div>
             <div className="section-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-82.39,16.72-168.36,50.09-250.49,89.91C164.63,122.32,84.31,152.34,0,172.5V0H1200V5.81C1132.19,11.88,1065.71,26.84,985.66,92.83Z" className="shape-fill" style={{ fill: '#fafaf9' }}></path>
                </svg>
            </div>
        </Section>
    );
};

export default About;