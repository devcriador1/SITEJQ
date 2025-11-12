import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import type { Message } from '../types';
import { createChat } from '../services/geminiService';
import { XIcon, SendIcon, UserCircleIcon, AiIcon } from './icons';

interface ChatbotProps {
    onClose: () => void;
    onNavigate: (sectionId: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose, onNavigate }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [suggestions, setSuggestions] = useState([
        'O que é Terapia ABA?',
        'Quais os sinais do TEA?',
        'Quais serviços vocês oferecem?',
        'Como posso entrar em contato?',
    ]);

    useEffect(() => {
        setChat(createChat());
        setMessages([
            {
                role: 'model',
                text: 'Olá! Sou o assistente virtual do Instituto São Joaquim. Como posso te ajudar hoje sobre o Transtorno do Espectro Autista (TEA)?'
            }
        ]);
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = useCallback(async (messageText?: string) => {
        const currentInput = messageText || input;
        if (!currentInput.trim() || !chat || isLoading) return;

        if (suggestions.length > 0) {
            setSuggestions([]);
        }

        const userMessage: Message = { role: 'user', text: currentInput };
        setMessages(prev => [...prev, userMessage]);
        if (!messageText) {
            setInput('');
        }
        setIsLoading(true);

        try {
            const result = await chat.sendMessage({ message: currentInput });
            
            // FIX: The result from `chat.sendMessage` is the `GenerateContentResponse` itself.
            // There is no nested `.response` property. Access properties like `text` and `functionCalls` directly.
            const functionCalls = result.functionCalls;
            const text = result.text;

            if (functionCalls && functionCalls.length > 0) {
                const fc = functionCalls[0];
                if (fc.name === 'navigateToSection') {
                    if (text) {
                        setMessages(prev => [...prev, { role: 'model', text }]);
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                    
                    const { sectionId } = fc.args as { sectionId: string };
                    onNavigate(sectionId);
                }
            } else if (text) {
                setMessages(prev => [...prev, { role: 'model', text }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro. Por favor, tente novamente.' }]);
        } finally {
            setIsLoading(false);
        }
    }, [chat, input, isLoading, onNavigate, suggestions]);

    const handleSuggestionClick = (suggestion: string) => {
        setSuggestions([]);
        sendMessage(suggestion);
    };
    
    const handleSendClick = () => sendMessage();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSendClick();
        }
    };

    return (
        <div className="fixed bottom-20 right-5 md:right-10 w-[calc(100%-2.5rem)] sm:w-96 h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-soft-xl flex flex-col z-50 animate-slide-in-up">
            <header className="bg-gradient-to-r from-primary to-primary-dark text-light p-4 flex justify-between items-center rounded-t-2xl">
                <h3 className="font-bold text-lg">Assistente Inteligente</h3>
                <button onClick={onClose} className="text-light/80 hover:text-white transition-opacity">
                    <XIcon className="w-6 h-6" />
                </button>
            </header>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-teal-600 flex-shrink-0 flex items-center justify-center shadow-sm"><AiIcon className="w-5 h-5 text-white" /></div>}
                            <div className={`max-w-xs md:max-w-sm px-4 py-2.5 rounded-2xl ${msg.role === 'user' ? 'bg-secondary text-white rounded-br-none shadow-soft' : 'bg-white text-dark rounded-bl-none shadow-soft'}`}>
                               <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center"><UserCircleIcon className="w-6 h-6 text-gray-500" /></div>}
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-start gap-3">
                             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-teal-600 flex-shrink-0 flex items-center justify-center shadow-sm"><AiIcon className="w-5 h-5 text-white" /></div>
                            <div className="max-w-xs md:max-w-sm px-4 py-3 rounded-2xl bg-white text-dark rounded-bl-none shadow-soft">
                                <div className="flex items-center space-x-1.5">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div ref={messagesEndRef} />
            </div>

            {suggestions.length > 0 && (
                <div className="p-3 border-t bg-white">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Sugestões:</p>
                    <div className="flex flex-wrap gap-2">
                        {suggestions.map((s, i) => (
                            <button 
                                key={i}
                                onClick={() => handleSuggestionClick(s)}
                                className="text-sm bg-secondary/10 text-secondary-dark px-3 py-1.5 rounded-full hover:bg-secondary/20 transition-colors"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="p-3 border-t bg-white rounded-b-2xl">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua pergunta..."
                        className="flex-1 px-4 py-2 border bg-gray-100 rounded-full focus:ring-2 focus:ring-secondary/50 focus:outline-none focus:bg-white transition-all"
                        disabled={isLoading}
                    />
                    <button onClick={handleSendClick} disabled={isLoading || !input.trim()} className="bg-accent text-white p-3 rounded-full hover:bg-amber-600 disabled:bg-gray-300 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                        <SendIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;