import React, { useState, useCallback, useEffect } from 'react';
import Section from './Section';
import Modal from './Modal';

const images = [
    { src: 'https://picsum.photos/seed/sensory/600/400', alt: 'Sala de terapia sensorial moderna com equipamentos de soft play, texturas e iluminação calmante' },
    { src: 'https://picsum.photos/seed/playroom/600/400', alt: 'Sala de atividades em grupo, clara e arejada, com crianças engajadas em um jogo de habilidades sociais guiado por um terapeuta' },
    { src: 'https://picsum.photos/seed/learning/600/400', alt: 'Sala de atendimento individual, organizada e acolhedora, com uma criança e terapeuta trabalhando com materiais educativos' }
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
            <Section id="gallery" className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Nosso Espaço</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Um ambiente seguro, acolhedor e preparado para o desenvolvimento.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg group cursor-pointer" onClick={() => openModal(index)}>
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