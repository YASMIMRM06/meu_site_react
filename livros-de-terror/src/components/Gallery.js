import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2>Galeria de Livros de Terror</h2>
            <div className="gallery">
                <img src={`${process.env.PUBLIC_URL}/img/Dracula.jpg`} alt="Livro 1" />
                <img src={`${process.env.PUBLIC_URL}/img/baba yaga.jpg`} alt="Livro 2" />
                <img src={`${process.env.PUBLIC_URL}/img/outsider.jpg`} alt="Livro 3" />
            </div>
        </div>
    );
};

export default Gallery;
