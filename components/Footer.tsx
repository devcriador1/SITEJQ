import React from 'react';
import { LogoLight, LocationMarkerIcon, PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon } from './icons';
import { useNavigation } from '../contexts/NavigationContext';

const Footer: React.FC = () => {
    const { navigate } = useNavigation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        navigate(sectionId);
    };

    const navLinks = [
        { name: 'Sobre Nós', href: '#about', id: 'about' },
        { name: 'Nosso Método', href: '#method', id: 'method' },
        { name: 'Serviços', href: '#services', id: 'services' },
        { name: 'Nossa Equipe', href: '#team', id: 'team' },
    ];

     const resourceLinks = [
        { name: 'Sinais e Diagnóstico', href: '#signs', id: 'signs' },
        { name: 'Blog & Recursos', href: '#blog', id: 'blog' },
        { name: 'Perguntas Frequentes', href: '#faq', id: 'faq' },
        { name: 'Nosso Espaço', href: '#gallery', id: 'gallery' },
    ];

    const contactInfo = [
        { 
            icon: <LocationMarkerIcon className="w-5 h-5" />, 
            text: 'Rua Guarema, 374, Bosque da Saúde, SP', 
            href: 'https://www.google.com/maps/search/?api=1&query=Rua+Guarema+374+Bosque+da+Saude+SP' 
        },
        { 
            icon: <PhoneIcon className="w-5 h-5" />, 
            text: '(11) 2574-5435', 
            href: 'tel:+551125745435' 
        },
        { 
            icon: <WhatsAppIcon className="w-5 h-5" />, 
            text: '(11) 94847-6525', 
            href: 'https://wa.me/5511948476525' 
        },
        { 
            icon: <MailIcon className="w-5 h-5" />, 
            text: 'institutosaojoaquim@gmail.com', 
            href: 'mailto:institutosaojoaquim@gmail.com' 
        },
    ];

    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/aba_institutosaojoaquim/',
            icon: <InstagramIcon className="w-6 h-6" />
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/5511948476525',
            icon: <WhatsAppIcon className="w-6 h-6" />
        }
    ]

    return (
        <footer className="bg-dark text-light">
            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Coluna 1: Sobre */}
                    <div className="flex flex-col">
                        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="mb-4">
                           <LogoLight />
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Desvendando o potencial de cada criança através de cuidado especializado, humanizado e baseado em evidências.
                        </p>
                         <div className="flex space-x-4 mt-6">
                            {socialLinks.map(social => (
                                <a 
                                    key={social.name}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h3 className="text-lg font-semibold text-white tracking-wider mb-4">Navegação</h3>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.id)} className="text-gray-400 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Coluna 3: Recursos */}
                    <div>
                        <h3 className="text-lg font-semibold text-white tracking-wider mb-4">Recursos</h3>
                        <ul className="space-y-3">
                            {resourceLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.id)} className="text-gray-400 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h3 className="text-lg font-semibold text-white tracking-wider mb-4">Fale Conosco</h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="flex-shrink-0 mt-1 text-primary-light">{item.icon}</span>
                                    <a href={item.href} target={item.href.startsWith('http') || item.href.startsWith('tel') || item.href.startsWith('mailto') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''} className="ml-3 text-gray-400 hover:text-white transition-colors">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Instituto São Joaquim. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
