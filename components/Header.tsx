import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, Logo, SunIcon, MoonIcon, AiIcon } from './icons';
import useScrollSpy from '../hooks/useScrollSpy';

interface HeaderProps {
    sectionIds: string[];
    theme: string;
    toggleTheme: () => void;
    openChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ sectionIds, theme, toggleTheme, openChat }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(sectionIds);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#about', id: 'about' },
        { name: 'Método', href: '#method', id: 'method' },
        { name: 'Serviços', href: '#services', id: 'services' },
        { name: 'Equipe', href: '#team', id: 'team' },
        { name: 'Blog', href: '#blog', id: 'blog' },
        { name: 'FAQ', href: '#faq', id: 'faq' },
        { name: 'Instagram', href: 'https://www.instagram.com/aba_institutosaojoaquim/', external: true },
    ];

    const WHATSAPP_LINK = "https://wa.me/5511954949734?text=Olá! Gostaria de saber mais sobre o Instituto São Joaquim.";

    const handleOpenChatAndCloseMenu = () => {
        openChat();
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 w-full z-30 bg-light/95 backdrop-blur-sm shadow-soft transition-all duration-300 dark:bg-dark-bg-card/90 dark:shadow-soft-lg dark:shadow-primary/5 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                <a href="#hero" className={`transition-transform duration-300 origin-left ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                    <Logo />
                </a>

                <nav className="hidden lg:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target={link.external ? '_blank' : '_self'} 
                            rel={link.external ? 'noopener noreferrer' : ''} 
                            className={`nav-link text-dark hover:text-primary transition-colors duration-300 font-medium dark:text-stone-300 dark:hover:text-primary-light ${activeSection === link.id ? 'active text-primary dark:text-primary-light' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="text-dark dark:text-stone-300 hover:text-primary dark:hover:text-primary-light p-2 rounded-full transition-colors duration-300">
                        {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                    </button>
                    <button onClick={openChat} className="flex items-center gap-2 bg-secondary/10 text-secondary-dark dark:bg-secondary/20 dark:text-secondary-light font-bold py-2 px-4 rounded-md hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors duration-300">
                        <AiIcon className="w-5 h-5" />
                        <span>Fale com IA</span>
                    </button>
                     <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary-dark text-white font-bold py-2 px-6 rounded-md hover:bg-dark dark:hover:bg-primary-dark/80 transition-colors duration-300">
                        Fale Conosco
                    </a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark dark:text-stone-300 focus:outline-none">
                        {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-light shadow-md dark:bg-dark-bg-card">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                target={link.external ? '_blank' : '_self'} 
                                rel={link.external ? 'noopener noreferrer' : ''} 
                                className="text-dark dark:text-stone-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300 font-medium text-lg" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button onClick={handleOpenChatAndCloseMenu} className="flex items-center gap-2 bg-secondary/10 text-secondary-dark dark:bg-secondary/20 dark:text-secondary-light font-bold py-3 px-8 rounded-md hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors duration-300 w-auto mt-4">
                            <AiIcon className="w-5 h-5" />
                            <span>Fale com IA</span>
                        </button>
                         <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary-dark text-white font-bold py-3 px-8 rounded-md hover:bg-dark transition-colors duration-300 w-auto" onClick={() => setIsMenuOpen(false)}>
                            Fale Conosco
                        </a>
                        <button onClick={toggleTheme} aria-label="Toggle theme" className="text-dark dark:text-stone-300 hover:text-primary dark:hover:text-primary-light p-2 rounded-full transition-colors duration-300 mt-2">
                           {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
