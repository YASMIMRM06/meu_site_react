import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2>Galeria de Livros de Terror</h2>
            <div className="gallery">
                <img src={`${process.env.PUBLIC_URL}/img/livro1.jpg`} alt="Livro 1" />
                <img src={`${process.env.PUBLIC_URL}/img/livro2.jpg`} alt="Livro 2" />
                <img src={`${process.env.PUBLIC_URL}/img/livro3.jpg`} alt="Livro 3" />
            </div>
        </div>
    );
};

export default Gallery;