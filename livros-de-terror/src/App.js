import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import History from './components/History';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Galeria</Link></li>
                    <li><Link to="/contact">Fale Conosco</Link></li>
                    <li><Link to="/history">Histórias</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="/history" component={History} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;