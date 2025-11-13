import React from 'react';
import Section from './Section';
import { QuoteIcon, UserCircleIcon } from './icons';

interface TestimonialCardProps {
    quote: string;
    author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => (
    <div className="bg-light dark:bg-dark-bg-card p-8 rounded-2xl shadow-soft border border-stone-100 dark:border-zinc-700 h-full flex flex-col relative group">
        <QuoteIcon className="absolute top-6 left-6 w-16 h-16 text-primary/5 dark:text-primary-light/5 transition-transform duration-300 group-hover:scale-110" />
        <div className="relative z-10 flex flex-col flex-grow">
            <p className="text-gray-700 dark:text-stone-300 italic flex-grow mb-6 leading-relaxed">"{quote}"</p>
            <div className="flex items-center justify-end">
                <UserCircleIcon className="w-8 h-8 text-primary-light mr-3"/>
                <p className="font-semibold text-primary dark:text-primary-light text-right">- {author}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        { 
            quote: 'Encontramos no Instituto São Joaquim não apenas terapeutas, mas parceiros na jornada do nosso filho. A evolução dele na comunicação foi incrível!', 
            author: 'Família S.'
        },
        { 
            quote: 'A abordagem humanizada e a equipe multidisciplinar fizeram toda a diferença. Sentimo-nos acolhidos e seguros desde o primeiro dia.', 
            author: 'Mariana P., mãe do Lucas'
        },
        { 
            quote: 'Ver nossa filha conquistando autonomia nas pequenas coisas do dia a dia não tem preço. Somos imensamente gratos a toda a equipe.', 
            author: 'Carlos e Joana M.'
        }
    ];
    
    return (
        <Section id="testimonials" className="bg-light dark:bg-dark-bg-card">
            <div className="text-center mb-12">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">Jornadas de Sucesso</h2>
                <p className="text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto">O impacto real do nosso trabalho, contado por quem mais importa.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
        </Section>
    );
};

export default Testimonials;