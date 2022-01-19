import Cabecalho from "./components/Cabecalho";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portifolio from "./components/Portifolio";
import Preco from "./components/Preco";
import Contato from "./components/Contato";
import Footer from "./components/Rodape";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>

        <Cabecalho />
        <Routes>
          <Route element={<Inicio/>} path="/" exact />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/servicos' element={<Servicos/>} />
          <Route path='/portifolio' element={<Portifolio/>} />
          <Route path='/precos' element={<Preco/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
