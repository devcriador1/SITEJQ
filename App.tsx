import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import WhyABA from './components/WhyABA';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { ChatBubbleIcon, QuestionMarkCircleIcon } from './components/icons';
import Signs from './components/Signs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import { NavigationProvider } from './contexts/NavigationContext';

const App: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showChatTooltip, setShowChatTooltip] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedPrefs = window.localStorage.getItem('theme');
            if (typeof storedPrefs === 'string') {
                return storedPrefs;
            }
            const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
            if (userMedia.matches) {
                return 'dark';
            }
        }
        return 'light';
    });


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    const sectionIds = ['hero', 'about', 'method', 'why-aba', 'signs', 'services', 'testimonials', 'gallery', 'team', 'blog', 'faq', 'contact'];

    // Efeito para MOSTRAR o tooltip
    useEffect(() => {
        if (isChatOpen) return; // Não mostrar se o chat já estiver aberto

        const timer = setTimeout(() => {
            setShowChatTooltip(true);
        }, 5000); // Mostra o tooltip após 5 segundos

        return () => clearTimeout(timer);
    }, [isChatOpen]);

    // Efeito para ESCONDER o tooltip ao rolar, apenas depois de ter sido mostrado
    useEffect(() => {
        if (!showChatTooltip) return; // Só adiciona o listener se o tooltip estiver visível

        const handleScroll = () => {
            setShowChatTooltip(false);
        };

        // Adiciona o listener com a opção 'once' para que seja executado apenas uma vez
        window.addEventListener('scroll', handleScroll, { once: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showChatTooltip]);

    const handleNavigation = (sectionId: string) => {
        const section = document.getElementById(sectionId);

        if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsChatOpen(false);
            return;
        }

        if (section) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80; // Fallback
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
                top: sectionTop - headerHeight, // Adjust for header height
                behavior: 'smooth'
            });

            setIsChatOpen(false); // Fecha o chat ao navegar
        } else {
            console.warn(`Section with id "${sectionId}" not found.`);
        }
    };
    
    const openChat = () => {
        setIsChatOpen(true);
        setShowChatTooltip(false); // Esconde o tooltip ao abrir o chat
    }

    return (
        <NavigationProvider value={{ navigate: handleNavigation }}>
            <div className="bg-stone-50 font-sans text-dark dark:bg-dark-bg dark:text-stone-300 transition-colors duration-300 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100 to-stone-50 dark:from-zinc-800/20 dark:to-dark-bg">
                <Header sectionIds={sectionIds} theme={theme} toggleTheme={toggleTheme} />
                <main>
                    <Hero theme={theme} />
                    <About />
                    <Method />
                    <WhyABA />
                    <Signs />
                    <Services />
                    <Testimonials />
                    <Gallery />
                    <Team />
                    <Blog />
                    <FAQ />
                    <CTA />
                    <Contact />
                </main>
                <Footer />

                <div className="fixed bottom-5 right-5 z-40 group">
                    {showChatTooltip && !isChatOpen && (
                        <div className="absolute bottom-full right-0 mb-3 w-max bg-white dark:bg-dark-bg-card dark:text-light rounded-lg px-4 py-2.5 shadow-soft-lg animate-fade-in-up-subtle flex items-center space-x-2.5">
                            <QuestionMarkCircleIcon className="w-6 h-6 text-primary"/>
                            <span className="text-sm font-medium">Tem alguma dúvida?</span>
                            <div className="absolute right-4 -bottom-1 w-2 h-2 bg-white dark:bg-dark-bg-card transform rotate-45"></div>
                        </div>
                    )}
                    <button
                        onClick={openChat}
                        className="relative bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-transform transform hover:scale-110"
                        aria-label="Abrir chat de atendimento inteligente"
                    >
                        <span className="absolute inset-0 rounded-full bg-accent animate-pulse-glow opacity-75"></span>
                        <ChatBubbleIcon className="relative w-8 h-8" />
                    </button>
                </div>
                
                {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
            </div>
        </NavigationProvider>
    );
};

export default App;
