import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from "./paginas/home/Home";
import Login from './paginas/login/Login';
import Sobre from "./paginas/sobreNos/Sobre";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobreNos" element={<Sobre />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
              <Route path="/tema" element={<ListaTema />} />
              <Route path="/posts" element={<ListaPostagem />} />

              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />

              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </>
  )
}

export default App;
