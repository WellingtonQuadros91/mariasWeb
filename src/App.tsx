import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from "./paginas/home/Home";
import Login from './paginas/login/Login';
import Sobre from "./paginas/sobreNos/Sobre";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import ListaTema from './components/temas/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobreNos" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
