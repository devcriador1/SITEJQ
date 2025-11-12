import React from 'react';
import Section from './Section';

const blogPosts = [
    {
        title: 'Entendendo a Seletividade Alimentar no TEA',
        category: 'Dicas Práticas',
        excerpt: 'Estratégias e abordagens para tornar a hora da refeição um momento mais tranquilo e positivo para crianças no espectro.',
        imageUrl: 'https://picsum.photos/seed/food/600/400',
    },
    {
        title: 'A Importância da Rotina para Crianças com Autismo',
        category: 'Desenvolvimento',
        excerpt: 'Descubra como uma rotina bem estruturada pode proporcionar segurança, previsibilidade e reduzir a ansiedade em crianças com TEA.',
        imageUrl: 'https://picsum.photos/seed/routine/600/400',
    },
    {
        title: 'Comunicação Alternativa: Ferramentas e Benefícios',
        category: 'Terapias',
        excerpt: 'Explore as diversas formas de comunicação além da fala e como elas podem destravar o potencial de expressão do seu filho.',
        imageUrl: 'https://picsum.photos/seed/communication/600/400',
    },
];

// FIX: Refactored BlogCard to use React.FC and a props interface for proper typing.
interface BlogCardProps {
    post: typeof blogPosts[0];
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <span className="text-sm font-semibold text-secondary">{post.category}</span>
            <h3 className="text-xl font-bold text-dark mt-2 mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href="#" className="font-semibold text-primary hover:text-primary-dark transition-colors">Ler Mais &rarr;</a>
        </div>
    </div>
);

const Blog: React.FC = () => {
    return (
        <Section id="blog" className="bg-light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Blog & Recursos</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Informação e apoio para fortalecer a jornada de cada família.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} post={post} />
                ))}
            </div>
        </Section>
    );
};

export default Blog;