import React from 'react';
function contatos (){
    return(
        <main>
      <h1>Contato</h1>
      <form action="envio.php" method="POST">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </main>
    );

}
export default Contatos;
