import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'; 
import Contato from './Components/Pages/Contato';
import Empresa from './Components/Pages/Empresa';
import NovoProjeto from './Components/Pages/NovoProjeto';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import Projects from './Components/Pages/Projects';

import Container from './Components/Layout/Container';
import Project from './Components/Pages/Project';


function App() {
  return (
    <Router>
      <NavBar/>
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/empresa' element={<Empresa/>}/>
            <Route path='/NovoProjeto' element={<NovoProjeto/>}/>      
            <Route path='/Projects/:id' element={<Project/>}/>      
          </Routes>
        </Container>
      <Footer/>
    </Router>
  )
}

export default App;