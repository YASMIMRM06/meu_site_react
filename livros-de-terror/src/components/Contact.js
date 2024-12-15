import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Fale Conosco</h2>
            <form>
                <label>
                    Nome:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Mensagem:
                    <textarea name="message" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;