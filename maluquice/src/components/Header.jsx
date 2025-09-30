import { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  BookOpenText,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  FileText,
  Recycle,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="bg-lime-900 text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Botão do menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded hover:bg-lime-700 transition"
      >
        {/* Ícone Hamburger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Logo (direita) */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Rio Vivo" className="h-10" />
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-lime-900 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Botão fechar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-gray-400 hover:text-white"
          >
            ✕
          </button>

          {/* Home */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-lime-400"
          >
            <House size={20} /> Home
          </Link>

          {/* Blogs + Submenu */}
          <div>
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex items-center justify-between w-full hover:text-lime-400"
            >
              <span className="flex items-center gap-3">
                <BookOpenText size={20} /> Blogs
              </span>
              {submenuOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {/* Submenu animado */}
            <div
              className={`ml-6 flex flex-col gap-5 text-gray-300 overflow-hidden transition-all duration-500 ${
                submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                to="/blog/arvore"
                onClick={() => setMenuOpen(false)}
                className="hover:text-lime-600"
              >
                Dia da Árvore
              </Link>
              <Link
                to="/blog/multirao"
                onClick={() => setMenuOpen(false)}
                className="hover:text-lime-600"
              >
                Mutirão de Limpeza
              </Link>
              <Link
                to="/blog/campanha"
                onClick={() => setMenuOpen(false)}
                className="hover:text-lime-600"
              >
                Campanhas Coleta Seletiva
              </Link>
            </div>
          </div>

          {/* Loja Sustentável */}
          <Link
            to="/loja"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-lime-400"
          >
            <ShoppingBag size={20} /> Loja Sustentável
          </Link>

          {/* Informações Adicionais */}
          <Link
            to="/info"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-lime-400"
          >
            <FileText size={20} /> Informações Adicionais
          </Link>

          {/* Cadastro de Reuso */}
          <Link
            to="/reuso"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-lime-400"
          >
            <Recycle size={20} /> Cadastro de Reuso
          </Link>
        </div>
      </div>
    </header>
  );
}
