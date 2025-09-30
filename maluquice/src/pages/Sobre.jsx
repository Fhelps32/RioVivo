import { MapPin } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Seção Hero / Título */}
      <section
        className="relative bg-cover bg-center py-50 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/paisagem.jpg')",
        }}
      >
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg text-white">
            Sobre a Rio Vivo
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Nosso objetivo é transformar a relação das pessoas com o meio
            ambiente, promovendo a reciclagem, a conscientização e um futuro
            sustentável.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-zinc-900"></div>
      </section>

      {/* Seção Experiências */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-lime-900">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experiências dos nossos clientes
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <img
              src="/images/pessoa_1.jpg"
              alt="Cliente 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="italic text-gray-700">
                "A Rio Vivo mudou a forma como lido com o lixo. Hoje
                reciclam muito mais com meus artesanatos!"
              </p>
              <span className="block mt-4 font-semibold text-lime-800">
                — Antonella Braga
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <img
              src="/images/pessoa_2.jpg"
              alt="Cliente 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="italic text-gray-700">
                "Excelente iniciativa! As oficinas de reciclagem foram muito
                úteis para minha família."
              </p>
              <span className="block mt-4 font-semibold text-lime-800">
                — Maria Oliveira
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <img
              src="/images/pessoa_3.jpg"
              alt="Cliente 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="italic text-gray-700">
                "Graças à Rio Vivo conseguimos organizar a coleta seletiva no
                nosso condomínio."
              </p>
              <span className="block mt-4 font-semibold text-lime-800">
                — Carlos Mendes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato + Localização */}
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

          {/* Localização + Endereço */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-lime-700" /> Nossa sede
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rua vinte e um, 102 <br />
                vila santa cécilia — Volta Redonda/RJ <br />
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
      </section>
    </div>
  );
}
