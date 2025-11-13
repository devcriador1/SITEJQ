import React, { useState } from 'react';
import { MenuIcon, XIcon, Logo } from './icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Método', href: '#method' },
        { name: 'Por que ABA?', href: '#why-aba' },
        { name: 'Sinais', href: '#signs' },
        { name: 'Serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Nosso Espaço', href: '#gallery' },
        { name: 'Equipe', href: '#team' },
        { name: 'Blog', href: '#blog' },
        { name: 'Instagram', href: 'https://www.instagram.com/aba_institutosaojoaquim/', external: true },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="fixed top-0 w-full z-30 bg-light shadow-soft">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero">
                    <Logo />
                </a>

                <nav className="hidden lg:flex space-x-6">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target={link.external ? '_blank' : '_self'} 
                            rel={link.external ? 'noopener noreferrer' : ''} 
                            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex">
                     <a href="#contact" className="bg-primary-dark text-white font-bold py-2 px-6 rounded-md hover:bg-dark transition-colors duration-300">
                        Fale Conosco
                    </a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark focus:outline-none">
                        {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-light shadow-md">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                target={link.external ? '_blank' : '_self'} 
                                rel={link.external ? 'noopener noreferrer' : ''} 
                                className="text-dark hover:text-primary transition-colors duration-300 font-medium" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                         <a href="#contact" className="bg-primary-dark text-white font-bold py-2 px-6 rounded-md hover:bg-dark transition-colors duration-300 w-auto" onClick={() => setIsMenuOpen(false)}>
                            Fale Conosco
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;