
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import type { Message } from '../types';
import { createChat } from '../services/geminiService';
import { XIcon, SendIcon, UserCircleIcon, AiIcon } from './icons';
import MarkdownRenderer from './MarkdownRenderer';
import { useNavigation } from '../contexts/NavigationContext';

interface ChatbotProps {
    onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const { navigate } = useNavigation();
    const [suggestions, setSuggestions] = useState([
        'Como funciona a Terapia ABA?',
        'Quais os sinais do TEA?',
        'Onde fica o instituto?',
        'Quais serviços vocês oferecem?',
    ]);

    useEffect(() => {
        try {
            const newChat = createChat();
            setChat(newChat);
            setMessages([
                {
                    role: 'model',
                    text: 'Olá! Sou o assistente do Instituto São Joaquim. Estou aqui para acolher suas dúvidas e orientar você sobre o TEA e nossos serviços. Como posso ajudar hoje?'
                }
            ]);
        } catch (error) {
            console.error("Erro ao carregar chat:", error);
            setIsError(true);
        }
    }, []);
    
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    const sendMessage = useCallback(async (messageText?: string) => {
        const currentInput = messageText || input;
        if (!currentInput.trim() || !chat || isLoading || isError) return;

        setSuggestions([]);
        const userMessage: Message = { role: 'user', text: currentInput };
        setMessages(prev => [...prev, userMessage, { role: 'model', text: '' }]);
        
        if (!messageText) setInput('');
        setIsLoading(true);

        try {
            const streamResult = await chat.sendMessageStream({ message: currentInput });
            
            let accumulatedText = '';
            for await (const chunk of streamResult.stream) {
                const chunkText = chunk.text;
                if (chunkText) {
                    accumulatedText += chunkText;
                    setMessages(prev => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1].text = accumulatedText;
                        return newMessages;
                    });
                }
            }

            const response = await streamResult.response;
            const functionCalls = response.functionCalls;

            if (functionCalls && functionCalls.length > 0) {
                for (const fc of functionCalls) {
                    if (fc.name === 'navigateToSection') {
                        const { sectionId } = fc.args as { sectionId: string };
                        // Pequeno atraso para o usuário ler a confirmação antes da tela rolar
                        setTimeout(() => navigate(sectionId), 700);
                    }
                }
            }
        } catch (error) {
            console.error('Erro na conversa:', error);
            setMessages(prev => {
                 const newMessages = [...prev];
                 newMessages[newMessages.length - 1].text = 'Desculpe, tive uma pequena falha técnica. Poderia repetir a pergunta?';
                 return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    }, [chat, input, isLoading, navigate, isError]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="fixed bottom-20 right-5 md:right-10 w-[calc(100%-2.5rem)] sm:w-96 h-[70vh] max-h-[600px] bg-white dark:bg-dark-bg-card rounded-2xl shadow-soft-xl flex flex-col z-50 animate-slide-in-up border border-stone-100 dark:border-zinc-800">
            <header className="bg-primary dark:bg-primary-dark text-white p-4 flex justify-between items-center rounded-t-2xl shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="font-semibold text-base">Atendimento Humanizado</h3>
                </div>
                <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors" aria-label="Fechar">
                    <XIcon className="w-5 h-5" />
                </button>
            </header>
            
            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto bg-stone-50 dark:bg-dark-bg space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'model' ? 'bg-secondary text-white' : 'bg-stone-200 dark:bg-zinc-700 text-gray-500'}`}>
                            {msg.role === 'model' ? <AiIcon className="w-5 h-5" /> : <UserCircleIcon className="w-6 h-6" />}
                        </div>
                        <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                            msg.role === 'user' 
                            ? 'bg-primary text-white rounded-tr-none' 
                            : 'bg-white dark:bg-dark-bg-card text-dark dark:text-stone-200 rounded-tl-none shadow-soft border border-stone-100 dark:border-zinc-800'
                        }`}>
                            {msg.role === 'model' ? <MarkdownRenderer text={msg.text} /> : <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>}
                            {isLoading && msg.role === 'model' && index === messages.length - 1 && !msg.text && (
                                <div className="flex space-x-1 py-1">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {suggestions.length > 0 && (
                <div className="px-4 py-3 flex flex-wrap gap-2 bg-white dark:bg-dark-bg-card border-t border-stone-100 dark:border-zinc-800">
                    {suggestions.map((s, i) => (
                        <button 
                            key={i} 
                            onClick={() => sendMessage(s)}
                            className="text-[11px] font-medium bg-stone-100 dark:bg-zinc-800 text-gray-600 dark:text-stone-400 px-3 py-1.5 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-200"
                        >
                            {s}
                        </button>
                    ))}
                </div>
            )}

            <div className="p-4 bg-white dark:bg-dark-bg-card rounded-b-2xl border-t border-stone-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Como podemos ajudar?"
                        className="flex-1 bg-stone-100 dark:bg-dark-bg text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white border-none placeholder:text-gray-400"
                        disabled={isLoading}
                    />
                    <button 
                        onClick={() => sendMessage()} 
                        disabled={isLoading || !input.trim()} 
                        className="bg-accent hover:bg-accent-dark text-white p-3 rounded-xl transition-all disabled:opacity-50 shadow-sm"
                        aria-label="Enviar"
                    >
                        <SendIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
