import React, { useState } from 'react';
import Section from './Section';
import { PhoneIcon, MailIcon, LocationMarkerIcon, WhatsAppIcon, ClockIcon } from './icons';

const ContactInfoItem = ({ icon, href, text, label }: { icon: React.ReactElement<React.SVGProps<SVGSVGElement>>, href: string, text: string, label?: string }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        className="flex items-center p-3 rounded-xl transition-colors group hover:bg-primary/5 dark:hover:bg-primary/10"
    >
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
        <div className="ml-4 flex-1">
            {label && <p className="text-sm font-semibold text-gray-500 dark:text-stone-400">{label}</p>}
            <p className="text-dark dark:text-light font-medium group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">{text}</p>
        </div>
    </a>
);

const InfoItem = ({ icon, text, label }: { icon: React.ReactElement<React.SVGProps<SVGSVGElement>>, text: string, label: string }) => (
     <div className="flex items-center p-3">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
             {React.cloneElement(icon, { className: 'w-6 h-6' })}
        </div>
        <div className="ml-4 flex-1">
           <p className="text-sm font-semibold text-gray-500 dark:text-stone-400">{label}</p>
           <p className="text-dark dark:text-light font-medium">{text}</p>
        </div>
     </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const WHATSAPP_NUMBER = '5511948476528';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const text = `Olá! Meu nome é ${name}. Gostaria de mais informações.\n\nMensagem: ${message}\n\nMeu email para contato é: ${email}`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Section id="contact" className="bg-stone-50 dark:bg-dark-bg">
            <div className="text-center mb-12">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">Entre em Contato</h2>
                <p className="text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto">Estamos aqui para ouvir você. Agende uma conversa inicial sem compromisso.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-light dark:bg-dark-bg-card p-8 rounded-2xl shadow-soft-lg border border-stone-100 dark:border-zinc-700">
                    <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6">Envie uma Mensagem</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome</label>
                            <input type="text" name="name" id="name" placeholder="Seu Nome" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-stone-100 dark:bg-dark-bg dark:text-light dark:border-zinc-600 dark:placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 focus:bg-white dark:focus:bg-dark-bg transition-all outline-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Seu Email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-stone-100 dark:bg-dark-bg dark:text-light dark:border-zinc-600 dark:placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 focus:bg-white dark:focus:bg-dark-bg transition-all outline-none" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem</label>
                            <textarea name="message" id="message" rows={4} placeholder="Sua Mensagem" value={formData.message} onChange={handleInputChange} required className="w-full px-4 py-3 bg-stone-100 dark:bg-dark-bg dark:text-light dark:border-zinc-600 dark:placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 focus:bg-white dark:focus:bg-dark-bg transition-all outline-none"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-dark transition-all transform hover:scale-105 active:scale-95 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                                Enviar para WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="bg-light dark:bg-dark-bg-card p-8 rounded-2xl shadow-soft-lg border border-stone-100 dark:border-zinc-700 flex flex-col">
                    <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-6">Nossas Informações</h3>
                    <div className="space-y-2 text-gray-700 dark:text-stone-300 flex flex-col justify-around flex-grow">
                        <ContactInfoItem 
                            icon={<LocationMarkerIcon />}
                            href="https://www.google.com/maps/search/?api=1&query=Rua+Guarema+374+Bosque+da+Saude+SP"
                            text="Rua Guarema, 374, Bosque da Saúde, SP"
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
                            href="https://wa.me/5511948476528"
                            text="(11) 94847-6528"
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