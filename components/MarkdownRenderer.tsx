
import React from 'react';

const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;

    const processText = (input: string) => {
        // Divide o texto em partes para processar negrito (**texto**) de forma segura
        const parts = input.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-primary-dark dark:text-primary-light">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const renderContent = () => {
        // Divide o texto em blocos de parágrafo
        const blocks = text.split('\n\n');
        
        return blocks.map((block, blockIndex) => {
            const lines = block.split('\n');
            const isList = lines.filter(l => l.trim() !== '').every(l => l.trim().startsWith('* '));

            if (isList && lines.some(l => l.trim() !== '')) {
                return (
                    <ul key={blockIndex} className="list-disc list-inside my-2 space-y-1">
                        {lines.filter(l => l.trim() !== '').map((line, lineIndex) => {
                            const itemContent = line.trim().substring(2);
                            return (
                                <li key={lineIndex} className="text-sm">
                                    {processText(itemContent)}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <p key={blockIndex} className="mb-2 last:mb-0 leading-relaxed">
                        {processText(block)}
                    </p>
                );
            }
        });
    };

    return <div className="text-sm leading-relaxed whitespace-pre-wrap">{renderContent()}</div>;
};

export default MarkdownRenderer;
