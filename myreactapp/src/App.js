import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Contatos from './components/Menu';
import History from './components/History';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  
  <Router>
    <Menu/>
     <Routes>
     <Route path='/Home'element={<Home />} />
     <Route path='/History'element={<History />} />
     <Route path='/Galeria'element={<Galeria />} />
     <Route path='/Contatos'element={<Contatos />} />
     </Routes>
       <Footer/>
       
         
    </Router>;
}

export default App;
