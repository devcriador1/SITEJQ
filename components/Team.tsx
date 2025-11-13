import React from 'react';
import Section from './Section';

const Team: React.FC = () => {
    return (
        <Section id="team" className="bg-light">
            <div className="text-center mb-12">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Uma Equipe Multidisciplinar Dedicada</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Nossos especialistas colaboram para criar um plano de desenvolvimento único para cada criança.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <img 
                    src="https://picsum.photos/seed/teamwork/800/600" 
                    alt="Equipe de especialistas multidisciplinares colaborando em um plano terapêutico em um escritório moderno" 
                    className="rounded-2xl shadow-soft-lg w-full h-auto object-cover aspect-video"
                />
                <div>
                    <h3 className="text-3xl font-semibold text-primary mb-4">A Força da Colaboração</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        O sucesso de nossas intervenções está na força de uma equipe coesa e multidisciplinar. Contamos com psicólogos especializados em ABA, fonoaudiólogos, terapeutas ocupacionais e psicopedagogos que trabalham em total sinergia. Essa colaboração permite uma visão 360º sobre as necessidades de cada criança, garantindo um plano terapêutico verdadeiramente integrado e eficaz.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Nossos profissionais estão em constante atualização, buscando as mais recentes pesquisas e práticas baseadas em evidências. Mais do que especialistas, são pessoas apaixonadas pelo desenvolvimento humano, dedicadas a construir um vínculo de confiança com cada criança e sua família.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Acreditamos que a parceria com a família é fundamental. Por isso, mantemos uma comunicação aberta e transparente, envolvendo os pais e cuidadores em cada etapa do processo terapêutico.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Team;