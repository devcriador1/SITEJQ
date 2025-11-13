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
    {
        title: 'A Importância do Brincar no Desenvolvimento',
        category: 'Desenvolvimento',
        excerpt: 'O brincar é a linguagem da criança. Veja como usamos atividades lúdicas para desenvolver habilidades essenciais de forma natural e divertida.',
        imageUrl: 'https://picsum.photos/seed/play/600/400',
    },
    {
        title: 'Tecnologia Assistiva para Crianças com TEA',
        category: 'Ferramentas',
        excerpt: 'Conheça aplicativos e dispositivos que podem auxiliar na comunicação, organização e aprendizado de crianças no espectro autista.',
        imageUrl: 'https://picsum.photos/seed/tech/600/400',
    },
    {
        title: 'Irmãos de Crianças com Autismo: Um Olhar de Apoio',
        category: 'Família',
        excerpt: 'A dinâmica familiar é única. Abordamos como apoiar os irmãos, promovendo um ambiente de compreensão e parceria entre todos.',
        imageUrl: 'https://picsum.photos/seed/siblings/600/400',
    },
];

interface BlogCardProps {
    post: typeof blogPosts[0];
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <div className="bg-light rounded-2xl shadow-soft border border-stone-100 overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <span className="text-sm font-semibold text-secondary-dark">{post.category}</span>
            <h3 className="text-xl font-bold text-dark mt-2 mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
            <a href="#" className="font-semibold text-primary hover:text-primary-dark transition-colors">Ler Mais &rarr;</a>
        </div>
    </div>
);

const Blog: React.FC = () => {
    return (
        <Section id="blog" className="bg-stone-50">
            <div className="text-center mb-12">
                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-background-pan bg-200%">Blog & Recursos</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Informação e apoio para fortalecer a jornada de cada família.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} post={post} />
                ))}
            </div>
        </Section>
    );
};

export default Blog;