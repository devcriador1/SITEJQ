import React from 'react';
import Section from './Section';
import { QuoteIcon } from './icons';

interface TestimonialCardProps {
    quote: string;
    author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => (
    <div className="bg-light p-8 rounded-2xl shadow-soft border border-stone-100 h-full flex flex-col relative">
        <QuoteIcon className="absolute top-4 left-6 w-12 h-12 text-primary/10" />
        <div className="relative z-10">
            <p className="text-gray-700 italic flex-grow mb-4 leading-relaxed">"{quote}"</p>
            <p className="text-right font-semibold text-primary">- {author}</p>
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
        <Section id="testimonials" className="bg-light">
            <div className="text-center mb-12">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">O que as Famílias Dizem</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">O impacto real do nosso trabalho, contado por quem mais importa.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
        </Section>
    );
};

export default Testimonials;