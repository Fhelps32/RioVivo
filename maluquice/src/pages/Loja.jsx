import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Loja() {
  const [quantities, setQuantities] = useState([0, 0, 0]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  const navigate = useNavigate();

  const produtos = [
    {
      id: 1,
      nome: "Copos Ecológicos",
      preco: "R$ 20,00",
      descricao:
        "Nossos copos ecológicos são feitos de materiais recicláveis e são uma excelente alternativa aos copos plásticos.",
      imagem: "/images/copo.png",
    },
    {
      id: 2,
      nome: "Sacola Reutilizável",
      preco: "R$ 35,00",
      descricao:
        "Feita de material reciclado, esta sacola é perfeita para substituir as sacolas plásticas.",
      imagem: "/images/bolsa.png",
    },
    {
      id: 3,
      nome: "Canudo de Aço Inoxidável",
      preco: "R$ 35,00",
      descricao:
        "Este canudo de aço inoxidável é durável e fácil de limpar, ideal para bebidas quentes e frias.",
      imagem: "/images/canudo.png",
    },
  ];

  const alterarQuantidade = (index, delta) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(0, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  const handleChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:", novoProduto);
    alert(`Produto "${novoProduto.nome}" cadastrado com sucesso!`);

    // limpa os campos
    setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "" });
  };

  const handleAddCarrinho = (index) => {
    if (quantities[index] === 32) {
      navigate("/Caras");         
    } else {
      alert(`Adicionado ${quantities[index]}x ${produtos[index].nome} ao carrinho!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
      <section className="py-20 bg-zinc-900 px-6">
        <div className="container mx-auto">
          {/* Título e frase */}
          <h1 className="text-4xl font-extrabold text-left mb-4">
            Loja Sustentável
          </h1>
          <p className="text-gray-300 text-left mb-12">
            Produtos ecológicos para um futuro melhor 🌱
          </p>

          {/* Produtos */}
          <div className="flex flex-col gap-10">
            {produtos.map((produto, index) => (
              <div
                key={produto.id}
                className="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.01] transition-transform flex flex-col md:flex-row w-full"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full md:w-1/3 h-72 object-cover"
                />
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold">{produto.nome}</h3>
                    <p className="mt-1 text-lime-700 font-semibold">
                      {produto.preco}
                    </p>
                    <p className="mt-4 text-gray-600">{produto.descricao}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => alterarQuantidade(index, -1)}
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="font-bold">{quantities[index]}</span>
                      <button
                        onClick={() => alterarQuantidade(index, 1)}
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleAddCarrinho(index)}
                      className="flex items-center gap-2 bg-lime-700 hover:bg-lime-800 text-white px-6 py-3 rounded-lg transition"
                    >
                      <ShoppingCart className="w-5 h-5" /> Adicionar no Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Card de aviso "Novos produtos em breve" */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform flex flex-col">
              <img
                src="/images/arranjo.jpg"
                alt="Novos produtos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-lime-800 mb-4">
                  Novos produtos em breve
                </h3>
                <p className="text-gray-600 flex-grow">
                  Estamos preparando novidades sustentáveis para você. Em breve
                  mais opções estarão disponíveis em nossa loja!
                </p>
              </div>
            </div>
          </div>

          {/* Botão Finalizar Compra */}
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg">
              Finalizar Compra
            </button>
          </div>

          {/* Área de Cadastro de Produto */}
          <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-6">Cadastrar Novo Produto</h2>
            <form onSubmit={handleCadastrar} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={novoProduto.nome}
                  onChange={handleChange}
                  placeholder="Nome do produto"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Preço</label>
                <input
                  type="text"
                  name="preco"
                  value={novoProduto.preco}
                  onChange={handleChange}
                  placeholder="R$ 0,00"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Descrição</label>
                <textarea
                  name="descricao"
                  value={novoProduto.descricao}
                  onChange={handleChange}
                  placeholder="Descrição do produto"
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Imagem (URL)</label>
                <input
                  type="text"
                  name="imagem"
                  value={novoProduto.imagem}
                  onChange={handleChange}
                  placeholder="/images/arquivo.png"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lime-700 hover:bg-lime-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Cadastrar Produto
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
