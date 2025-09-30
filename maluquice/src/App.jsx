import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Loja from "./pages/Loja";
import BlogArvore from "./pages/BlogArvore";
import BlogMultirao from "./pages/BlogMultirao";
import BlogCampanha from "./pages/BlogCampanha";
import AgendarColeta from "./pages/Coleta";
import Educacao from "./pages/Educacao";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Sobre />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/blog/arvore" element={<BlogArvore />} />
          <Route path="/blog/multirao" element={<BlogMultirao />} />
          <Route path="/blog/campanha" element={<BlogCampanha />} />
          <Route path="/coleta" element={<AgendarColeta />} />
          <Route path="/educacao" element={<Educacao />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
