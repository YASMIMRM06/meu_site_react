import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      &copy; Tagline Backery Cakes
      <br />
      Rua 123, 12345-678, Cidade, Estado, CEP, Brasil.
      <div className="redes-sociais">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="img/twitter.png" alt="Twitter" className="social" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/instagram.png" alt="Instagram" className="social" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/facebook.png" alt="Facebook" className="social" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
