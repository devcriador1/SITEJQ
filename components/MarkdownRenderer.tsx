import React from 'react';

// A simple renderer for **bold** and * lists.
const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
    // Return empty if text is empty to avoid rendering empty divs
    if (!text) {
        return null;
    }

    const renderContent = () => {
        const blocks = text.split('\n\n'); // Split into paragraphs by double newline
        
        return blocks.map((block, blockIndex) => {
            const lines = block.split('\n');
            // Check if every non-empty line in the block is a list item
            const isList = lines.filter(line => line.trim() !== '').every(line => line.trim().startsWith('* '));

            if (isList && lines.some(line => line.trim() !== '')) {
                return (
                    <ul key={blockIndex} className="list-disc list-inside my-2 space-y-1">
                        {lines.filter(line => line.trim() !== '').map((line, lineIndex) => {
                            const itemContent = line.trim().substring(2);
                            const htmlContent = itemContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                            return <li key={lineIndex} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
                        })}
                    </ul>
                );
            } else {
                const htmlContent = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />');
                return <p key={blockIndex} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
            }
        });
    };

    return <div className="text-sm leading-relaxed whitespace-normal">{renderContent()}</div>;
};

export default MarkdownRenderer;
