export default function Reuso() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(24, 24, 27, 0.7),
            rgba(39, 39, 42, 0.7),      
            rgba(24, 24, 27, 0.9)
          ),
          url('/images/reuso.jpg')    
        `,
      }}
    >
      <div className="text-center max-w-lg w-full">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Reúso de Materiais
        </h1>

        {/* Área de Cadastro */}
        <form className="mt-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-left space-y-6">
          <div>
            <label className="block text-gray-200 font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-700 hover:bg-lime-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Cadastrar
          </button>
        </form>

        {/* Voltar */}
        <section className="max-w-4xl mx-auto py-8 px-6">
          <a
            href="/"
            className="relative z-10 bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            ← Voltar para Home
          </a>
        </section>
      </div>
    </div>
  );
}

