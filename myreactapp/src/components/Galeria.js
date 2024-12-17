import React from "react";

function Galeria() {
  return (
    <div className="container">
      <div className="gallery">
        <figure className="gallery__item">
          <img src="img/cupcake.jpg" alt="cupcake 1" className="gallery__img" />
        </figure>
        <figure className="gallery__item">
          <img
            src="img/cupcake-amora-negra.jpg"
            alt="cupcake amora negra"
            className="gallery__img"
          />
        </figure>
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
}

export default Galeria;
