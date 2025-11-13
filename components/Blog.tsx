import React, { useState, useEffect } from 'react';
import Section from './Section';

const blogPosts = [
    {
        title: 'Entendendo a Seletividade Alimentar no TEA',
        category: 'Dicas Práticas',
        excerpt: 'Estratégias e abordagens para tornar a hora da refeição um momento mais tranquilo e positivo para crianças no espectro.',
        imageUrl: 'https://i.postimg.cc/NM05k6BM/entendendo-a-seletividade-alimentar-no-tea.jpg',
        fullContent: 'A seletividade alimentar é um desafio comum para muitas famílias de crianças no espectro autista. As razões podem variar desde sensibilidades sensoriais (textura, cheiro, aparência dos alimentos) até a necessidade de rotina e previsibilidade. A abordagem deve ser sempre paciente e gradual. Comece introduzindo novos alimentos em pequenas quantidades, sem pressão, ao lado de alimentos que a criança já aceita bem. Envolver a criança no preparo das refeições, como lavar uma verdura ou misturar ingredientes, também pode diminuir a ansiedade e aumentar o interesse. Lembre-se, o objetivo é criar uma relação positiva com a comida, celebrando pequenas vitórias em vez de focar no que não foi comido.'
    },
    {
        title: 'A Importância da Rotina para Crianças com Autismo',
        category: 'Desenvolvimento',
        excerpt: 'Descubra como uma rotina bem estruturada pode proporcionar segurança, previsibilidade e reduzir a ansiedade em crianças com TEA.',
        imageUrl: 'https://i.postimg.cc/wvs17hpC/crian-a-fazendo-tarefa.jpg',
        fullContent: 'Para muitas crianças com TEA, o mundo pode parecer caótico e imprevisível. Uma rotina clara e consistente funciona como um mapa, ajudando a criança a entender o que esperar de cada momento do dia. Isso reduz significativamente a ansiedade e pode diminuir a ocorrência de comportamentos desafiadores. Ferramentas como quadros de rotina visual, com imagens ou palavras que representam cada atividade (acordar, comer, terapia, brincar, dormir), são extremamente eficazes. A previsibilidade que a rotina oferece libera espaço mental para que a criança possa se concentrar em aprender e interagir, em vez de se preocupar com o que virá a seguir.'
    },
    {
        title: 'Comunicação Alternativa: Ferramentas e Benefícios',
        category: 'Terapias',
        excerpt: 'Explore as diversas formas de comunicação além da fala e como elas podem destravar o potencial de expressão do seu filho.',
        imageUrl: 'https://i.postimg.cc/JhSnVGXm/crian-a-se-comunicando.jpg',
        fullContent: 'Quando a fala não se desenvolve de forma típica, a Comunicação Aumentativa e Alternativa (CAA) abre portas incríveis para a expressão. Sistemas como o PECS (Sistema de Comunicação por Troca de Figuras), pranchas de comunicação, aplicativos em tablets ou até mesmo a linguagem de sinais podem ser utilizados. É um mito que a CAA inibe o desenvolvimento da fala; pelo contrário, ao reduzir a frustração da criança por não conseguir se comunicar, ela muitas vezes serve como uma ponte para a vocalização. O mais importante é dar à criança uma forma de expressar suas vontades, necessidades e sentimentos, garantindo seu direito à comunicação.'
    },
    {
        title: 'A Importância do Brincar no Desenvolvimento',
        category: 'Desenvolvimento',
        excerpt: 'O brincar é a linguagem da criança. Veja como usamos atividades lúdicas para desenvolver habilidades essenciais de forma natural e divertida.',
        imageUrl: 'https://i.postimg.cc/HkVdYTdj/crian-a-brincando.jpg',
        fullContent: 'O brincar não é apenas uma diversão, é o principal meio pelo qual as crianças aprendem sobre o mundo e sobre si mesmas. Na terapia, usamos o brincar de forma estruturada para ensinar habilidades cruciais como o contato visual, o revezamento de turno, a imitação, a partilha de atenção e o pensamento simbólico. Através de jogos e atividades que partem do interesse da própria criança, criamos um ambiente motivador e natural para o aprendizado, onde as novas habilidades são adquiridas de forma prazerosa e significativa.'
    },
    {
        title: 'Tecnologia Assistiva para Crianças com TEA',
        category: 'Ferramentas',
        excerpt: 'Conheça aplicativos e dispositivos que podem auxiliar na comunicação, organização e aprendizado de crianças no espectro autista.',
        imageUrl: 'https://i.postimg.cc/bJP7tPcN/tecnologia-assistiva-para-crian-as-com-tea.jpg',
        fullContent: 'A tecnologia, quando usada de forma estratégica, pode ser uma aliada poderosa. Existem inúmeros aplicativos para tablets e smartphones que funcionam como comunicadores, agendas visuais, temporizadores para transições e ferramentas para contar histórias sociais (social stories). Esses recursos podem ajudar a criança a se organizar, a se comunicar de forma mais eficaz e a compreender situações sociais complexas. A chave é a mediação: a tecnologia deve ser usada como uma ferramenta de apoio, integrada ao plano teraputico e sempre com a orientação de um profissional.'
    },
    {
        title: 'Irmãos de Crianças com Autismo: Um Olhar de Apoio',
        category: 'Família',
        excerpt: 'A dinâmica familiar é única. Abordamos como apoiar os irmãos, promovendo um ambiente de compreensão e parceria entre todos.',
        imageUrl: 'https://i.postimg.cc/zfCM5Qbf/crian-a-com-fam-lia.jpg',
        fullContent: 'Os irmãos de crianças com TEA desempenham um papel muito especial e também enfrentam desafios únicos. Eles podem sentir uma mistura de amor, proteção, ciúmes ou até mesmo a pressão de serem "perfeitos". É fundamental criar um espaço de diálogo aberto onde eles possam expressar seus sentimentos sem julgamento. Reservar um tempo exclusivo para os irmãos, sem a presença da criança com autismo, fortalece o vínculo e mostra que suas necessidades também são importantes. Além disso, explicar o autismo em uma linguagem que eles possam entender ajuda a transformar a confusão em empatia e parceria.'
    },
];

interface BlogCardProps {
    post: typeof blogPosts[0];
    isExpanded: boolean;
    onToggleExpand: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isExpanded, onToggleExpand }) => (
    <div className="bg-light dark:bg-dark-bg-card rounded-2xl shadow-soft border border-stone-100 dark:border-zinc-700 overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
        <img src={post.imageUrl} alt={post.title} className="w-full aspect-video object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <span className="text-sm font-semibold text-secondary-dark">{post.category}</span>
            <h3 className="text-xl font-bold text-dark dark:text-light mt-2 mb-3">{post.title}</h3>
            <div className="flex-grow">
                <p className="text-gray-600 dark:text-stone-300 mb-4 leading-relaxed transition-all duration-300">
                    {isExpanded ? post.fullContent : post.excerpt}
                </p>
            </div>
            <button onClick={onToggleExpand} className="font-semibold text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-light transition-colors self-start mt-auto">
                {isExpanded ? 'Ler Menos' : 'Ler Mais'} &rarr;
            </button>
        </div>
    </div>
);

const Blog: React.FC = () => {
    const [expandedPostIndex, setExpandedPostIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    // Reset expanded post when changing pages
    useEffect(() => {
        setExpandedPostIndex(null);
    }, [currentPage]);
    
    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const handleToggleExpand = (index: number) => {
        const globalIndex = indexOfFirstPost + index;
        setExpandedPostIndex(prevIndex => (prevIndex === globalIndex ? null : globalIndex));
    };
    
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
        const blogSection = document.getElementById('blog');
        if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <Section id="blog" className="bg-stone-50 dark:bg-dark-bg">
            <div className="text-center mb-12">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">Blog & Recursos</h2>
                <p className="text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto">Informação e apoio para fortalecer a jornada de cada família.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post, index) => (
                    <BlogCard 
                        key={indexOfFirstPost + index}
                        post={post} 
                        isExpanded={expandedPostIndex === (indexOfFirstPost + index)}
                        onToggleExpand={() => handleToggleExpand(index)}
                    />
                ))}
            </div>
            
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-light dark:bg-dark-bg-card border border-stone-200 dark:border-zinc-600 rounded-md text-dark dark:text-light font-medium hover:bg-stone-100 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Página anterior"
                    >
                        &larr; Anterior
                    </button>
                    <span className="text-gray-700 dark:text-stone-300 font-medium">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-light dark:bg-dark-bg-card border border-stone-200 dark:border-zinc-600 rounded-md text-dark dark:text-light font-medium hover:bg-stone-100 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Próxima página"
                    >
                        Próxima &rarr;
                    </button>
                </div>
            )}
        </Section>
    );
};

export default Blog;