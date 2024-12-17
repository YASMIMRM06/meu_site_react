import React from "react";

function Contato() {
  return (
    <section id="contato">
      <h1>Entre em Contato</h1>
      <form>
        <div className="grid-container">
          <div className="grid-item">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="grid-item">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="grid-item">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
          </div>
          <div className="grid-item">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contato;

