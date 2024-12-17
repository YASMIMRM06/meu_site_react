import React from 'react';
import { Link } from 'react-router-dom';
function Menu (){
    return(
        <header>
        <div id="cabecalho">
            <img id="book-stack" src="img/book-stack.png" alt="Book">
        </div>
    
        <span id="hamburger-menu" onclick="toggleMenu()">&#9776;</span>
    
        <nav id="menu">
            <a href="/History"><p>História</p></a>
            <a href="/Galeria"><p>Galeria</p></a>
            <a href="/contatos.html"><p>Contato</p></a>
        </nav>
    </header>
    );
}
export default Menu;