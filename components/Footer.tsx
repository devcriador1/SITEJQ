import React from 'react';
import { LogoLight, LocationMarkerIcon, PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Sinais', href: '#signs' },
        { name: 'Serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Nosso Espaço', href: '#gallery' },
        { name: 'Equipe', href: '#team' },
        { name: 'Blog', href: '#blog' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contato', href: '#contact' },
    ];

    const contactInfo = [
        { 
            icon: <LocationMarkerIcon className="w-5 h-5" />, 
            text: 'Rua Arezema, 374, Bosque da Saúde, SP', 
            href: 'https://www.google.com/maps/search/?api=1&query=Rua+Arezema+374+Bosque+da+Saude+SP' 
        },
        { 
            icon: <PhoneIcon className="w-5 h-5" />, 
            text: '(11) 2574-5435', 
            href: 'tel:+551125745435' 
        },
        { 
            icon: <WhatsAppIcon className="w-5 h-5" />, 
            text: '(11) 95494-9734', 
            href: 'https://wa.me/5511954949734' 
        },
        { 
            icon: <MailIcon className="w-5 h-5" />, 
            text: 'institutosaojoaquim@gmail.com', 
            href: 'mailto:institutosaojoaquim@gmail.com' 
        },
    ];

    return (
        <footer className="bg-dark text-light">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Coluna 1: Logo e Descrição */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <a href="#hero">
                           <LogoLight />
                        </a>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">Desvendando o potencial de cada criança através de cuidado especializado e humanizado.</p>
                         <a 
                            href="https://www.instagram.com/aba_institutosaojoaquim/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h3 className="font-bold text-white tracking-wider uppercase mb-4 text-center md:text-left">Navegação</h3>
                        <ul className="space-y-2 flex flex-col items-center md:items-start">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-primary-light transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h3 className="font-bold text-white tracking-wider uppercase mb-4 text-center md:text-left">Contato</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-start justify-center md:justify-start">
                                    <span className="flex-shrink-0 mt-1 text-primary-light">{item.icon}</span>
                                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''} className="ml-3 text-gray-300 hover:text-white transition-colors">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Instituto São Joaquim. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;