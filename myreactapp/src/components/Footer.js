import React from 'react';
import { Link } from 'react-router-dom';
function Footer (){
    return(
        <footer>
      &copy; Tagline Backery Cakes
      <br /> Rua 123, 12345-678, Cidade, Estado, CEP, Brasil.
      <br /> 2034 Yasmim Russi Mariano - Todos os direitos reservados.
      <div></div>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img id="social" src="img/twitter.png" alt="Twitter" className="social" />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img id="social" src="img/instagram.png" alt="Instagram" className="social" />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img id="social" src="img/facebook.png" alt="Facebook" className="social" />
      </a>
    </footer>
    );
}
export default Footer;
