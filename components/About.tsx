import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Sobre o Instituto São Joaquim</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Nossa missão é transformar vidas através do cuidado especializado e do acolhimento.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <img 
                    src="https://i.postimg.cc/sfvTqTXm/Generated-Image-November-12-2025-10-51AM.png" 
                    alt="Terapeuta do Instituto São Joaquim em uma sessão individualizada com uma criança, demonstrando a abordagem de cuidado e desenvolvimento da instituição." 
                    className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                />
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Nossa Filosofia</h3>
                    <p className="text-gray-700 mb-4">
                        Acreditamos no potencial único de cada indivíduo. No Instituto São Joaquim, combinamos ciência, empatia e uma abordagem multidisciplinar para criar planos terapêuticos personalizados que promovem o desenvolvimento de habilidades, a autonomia e a qualidade de vida de crianças e adolescentes no espectro autista.
                    </p>
                    <p className="text-gray-700">
                        Nossa equipe é formada por profissionais apaixonados e altamente qualificados, dedicados a apoiar não apenas a criança, mas toda a família, oferecendo orientação, suporte e um ambiente seguro e acolhedor para todos.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;