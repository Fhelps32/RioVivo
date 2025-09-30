import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Normaliza o valor do scroll (0 → 1)
  const progress = Math.min(scrollY / 300, 1);
  const opacity = 1 - progress;

  return (
    <div>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-[72vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/home_fundo.jpg')",
        }}
      >
        <div className="bg-opacity-50 absolute inset-0"></div>

        <div className="relative z-10 text-white" style={{ opacity }}>
          <img src="/images/logo.png" alt="RioVivo" className="h-40" />
          <p className="mt-4 text-xl">
            Por onde a Rio Vivo passa, a natureza agradece
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-zinc-900"></div>
      </section>

      {/* CARDS */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-white text-3xl font-semibold text-center mb-12">
            Acesso Rápido
          </h2>

          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/coleta.jpg"
              alt="Coleta de Resíduos"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Coleta de Resíduos</h3>
              <p className="text-gray-700 mb-6">
                Agende a coleta do seu lixo reciclável diretamente pelo nosso
                site. Atendemos tanto moradores quanto empresas, facilitando o
                processo de descarte consciente e responsável. Fique atento aos
                nossos horários e serviços disponíveis.
              </p>
              <Link
                to="/coleta"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/educacao.jpg"
              alt="Educação Ambiental"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Educação Ambiental</h3>
              <p className="text-gray-700 mb-6">
                Promovemos oficinas e palestras sobre reciclagem e
                sustentabilidade, levando conscientização para escolas,
                comunidades e empresas.
              </p>
              <Link
                to="/educacao"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/reuso.jpg"
              alt="Reuso de Materiais"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Reuso de Materiais</h3>
              <p className="text-gray-700 mb-6">
                Incentivamos o reuso de materiais para reduzir o desperdício,
                transformando resíduos em novas oportunidades.
              </p>
              <Link
                to="/reuso"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Participe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notificações */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Notificações de Coleta</h1>
            <p className="mt-1 text-xl">
              Fique por dentro das ações de limpeza e mutirões na sua região. A
              sua participação é fundamental para manter nosso ambiente limpo e
              saudável.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/arvore"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/arvore.png"
                  alt="Projeto 1"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">
                  Dia da Árvore - Plantio de Mudas
                </p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/multirao"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/multirao.jpg"
                  alt="Projeto 2"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">
                  Mutirão de Limpeza - Bairro Volta Redonda
                </p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/campanha"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/campanha.jpg"
                  alt="Projeto 3"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">Campanha de Coleta Seletiva</p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-gradient-to-b from-lime-900 via-lime-900 to-lime-700">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Entre em contato com nossa equipe
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Formulário */}
          <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Seu email
              </label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                rows="4"
                placeholder="Digite sua mensagem..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-700 hover:bg-lime-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar
            </button>
          </form>

          {/* Localização */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                Nossa sede
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rua vinte e um, 102 <br />
                Vila Santa Cecília — Volta Redonda/RJ <br />
                CEP: 01234-567
              </p>

              <iframe
                title="Localização Rio Vivo"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.823138585728!2d-46.6559813!3d-23.5087769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f8b6cbeb37%3A0x9b35dfdee09db9c0!2sParque%20da%20Juventude!5e0!3m2!1spt-BR!2sbr!4v1673222463178!5m2!1spt-BR!2sbr`}
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl shadow-2xl border-4 border-white w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/riovivovr?igsh=aXd3NHhubjE5N2J6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-lime-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-lime-100 transition"
          >
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
            <span className="font-semibold">Siga-nos no Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}
