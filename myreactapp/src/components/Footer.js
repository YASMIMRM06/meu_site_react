import React from 'react';
import { Link } from 'react-router-dom';
function Footer (){
    return(
        <footer>
        &copy; Book Haven<br>Brasil.
        <br>2024 Yasmim Russi Mariano - Todos os direitos reservados.
        <div></div>
        <a href="https://twitter.com" target="_blank">
            <img src="https://github.com/YASMIMRM06/WEB/blob/main/SITE%20COM%20GRID/img/twitter.png?raw=true" alt="Twitter" class="social">
        </a>

        <a href="https://instagram.com" target="_blank">
            <img src="https://github.com/YASMIMRM06/WEB/blob/main/SITE%20COM%20GRID/img/instagram.png?raw=true" alt="Instagram" class="social">
        </a>

        <a href="https://facebook.com" target="_blank">
            <img src="https://github.com/YASMIMRM06/WEB/blob/main/SITE%20COM%20GRID/img/facebook.png?raw=true" alt="Facebook" class="social">
        </a>
    </footer>
    );
}
export default Footer;