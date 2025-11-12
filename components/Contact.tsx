import React from 'react';
import Section from './Section';
import { PhoneIcon, MailIcon, LocationMarkerIcon, WhatsAppIcon, ClockIcon } from './icons';

// Componente aprimorado para itens de contato clicáveis
// FIX: Made the icon prop type more specific to allow cloning with className.
const ContactInfoItem = ({ icon, href, text, label }: { icon: React.ReactElement<React.SVGProps<SVGSVGElement>>, href: string, text: string, label?: string }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        className="flex items-center p-3 rounded-lg transition-colors group hover:bg-primary/5"
    >
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
        <div className="ml-4 flex-1">
            {label && <p className="text-sm font-semibold text-gray-500">{label}</p>}
            <p className="text-dark font-medium group-hover:text-primary-dark transition-colors">{text}</p>
        </div>
    </a>
);

// Componente para itens de informação não-clicáveis
// FIX: Made the icon prop type more specific to allow cloning with className.
const InfoItem = ({ icon, text, label }: { icon: React.ReactElement<React.SVGProps<SVGSVGElement>>, text: string, label: string }) => (
     <div className="flex items-center p-3">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
             {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
        <div className="ml-4 flex-1">
           <p className="text-sm font-semibold text-gray-500">{label}</p>
           <p className="text-dark font-medium">{text}</p>
        </div>
     </div>
);

const Contact: React.FC = () => {
    return (
        <Section id="contact" className="bg-light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Entre em Contato</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Estamos aqui para ouvir você. Agende uma conversa inicial sem compromisso.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-soft-lg">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Envie uma Mensagem</h3>
                    <form action="#" method="POST" className="space-y-5">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome</label>
                            <input type="text" name="name" id="name" placeholder="Seu Nome" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white transition-all outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Seu Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white transition-all outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem</label>
                            <textarea name="message" id="message" rows={4} placeholder="Sua Mensagem" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white transition-all outline-none"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all transform hover:scale-105 active:scale-95 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-soft-lg flex flex-col">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Nossas Informações</h3>
                    <div className="space-y-2 text-gray-700 flex flex-col justify-around flex-grow">
                        <ContactInfoItem 
                            icon={<LocationMarkerIcon />}
                            href="https://www.google.com/maps/search/?api=1&query=Rua+Arezema+374+Bosque+da+Saude+SP"
                            text="Rua Arezema, 374, Bosque da Saúde, SP"
                            label="Endereço"
                        />
                         <ContactInfoItem 
                            icon={<PhoneIcon />}
                            href="tel:+551125745435"
                            text="(11) 2574-5435"
                            label="Telefone"
                        />
                         <ContactInfoItem 
                            icon={<WhatsAppIcon />}
                            href="https://wa.me/5511954949734"
                            text="(11) 95494-9734"
                            label="WhatsApp"
                        />
                         <ContactInfoItem 
                            icon={<MailIcon />}
                            href="mailto:institutosaojoaquim@gmail.com"
                            text="institutosaojoaquim@gmail.com"
                            label="Email"
                        />
                         <InfoItem 
                            icon={<ClockIcon />}
                            label="Horário"
                            text="Seg - Sex, 8h - 18h"
                         />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;