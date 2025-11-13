import React, { useState, useCallback, useEffect } from 'react';
import Section from './Section';
import Modal from './Modal';

const images = [
    { src: 'https://i.postimg.cc/Gmt4wPZ1/SAL1972.jpg', alt: 'Sala de terapia ampla e iluminada com balanços e materiais lúdicos.' },
    { src: 'https://i.postimg.cc/Z5nWtP1z/SAL1974.jpg', alt: 'Detalhe da área de atividades com terapeuta e crianças interagindo.' },
    { src: 'https://i.postimg.cc/kgG23NLk/SAL1979.jpg', alt: 'Criança sorrindo em um balanço dentro da sala de terapia.' },
    { src: 'https://i.postimg.cc/W1zdLmxx/SAL1985.jpg', alt: 'Visão geral do espaço terapêutico com diversos equipamentos.' },
    { src: 'https://i.postimg.cc/Gmt4wP6N/SAL1991.jpg', alt: 'Ambiente de aprendizado com mesa e cadeiras coloridas.' },
    { src: 'https://i.postimg.cc/jS2D06Bk/SAL1994.jpg', alt: 'Criança interagindo com blocos de montar coloridos no chão.' },
    { src: 'https://i.postimg.cc/W1zdLmxX/SAL1996.jpg', alt: 'Terapeuta e crianças em atividade com prancha de equilíbrio.' },
    { src: 'https://i.postimg.cc/P5JCsb0S/SAL2003.jpg', alt: 'Entrada do instituto com a logo e visão para a sala de terapia.' },
    { src: 'https://i.postimg.cc/T31KMjB0/SAL2061.jpg', alt: 'Espaço de terapia ocupacional com diversos estímulos.' },
    { src: 'https://i.postimg.cc/Bnbj95RT/SAL2070.jpg', alt: 'Sala de atendimento individual com materiais pedagógicos.' },
    { src: 'https://i.postimg.cc/L85JKkGz/SAL2081.jpg', alt: 'Terapeuta em sessão com criança utilizando recursos visuais.' },
    { src: 'https://i.postimg.cc/t4JsQd8d/SAL2082.jpg', alt: 'Detalhe dos materiais terapêuticos organizados em prateleiras.' },
    { src: 'https://i.postimg.cc/HknrD0F9/SAL2087.jpg', alt: 'Área de atividades sensoriais com diversos materiais.' },
    { src: 'https://i.postimg.cc/L85JKkGZ/SAL2091.jpg', alt: 'Outra visão da sala de terapia com foco nos equipamentos suspensos.' }
];


const Gallery: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showNextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    const showPrevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, showNextImage, showPrevImage]);


    return (
        <>
            <Section id="gallery" className="bg-stone-50 dark:bg-dark-bg">
                <div className="text-center mb-12">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">Nosso Espaço</h2>
                    <p className="text-xl text-gray-600 dark:text-stone-300 mt-4 max-w-3xl mx-auto">Um ambiente seguro, acolhedor e preparado para o desenvolvimento.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl shadow-soft dark:shadow-none dark:ring-1 dark:ring-zinc-700 group cursor-pointer" onClick={() => openModal(index)}>
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover aspect-video transform group-hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <div className="relative">
                         <img 
                            src={images[currentImageIndex].src} 
                            alt={images[currentImageIndex].alt}
                            className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                        />
                        <button 
                            onClick={showPrevImage} 
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors focus:outline-none"
                            aria-label="Previous image"
                        >
                            &#10094;
                        </button>
                        <button 
                            onClick={showNextImage} 
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors focus:outline-none"
                            aria-label="Next image"
                        >
                            &#10095;
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Gallery;