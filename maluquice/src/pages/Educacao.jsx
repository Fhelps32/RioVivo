export default function Educacao() {
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
          url('/images/maos_educativas.jpg')
        `
      }}
    >
      <div className="text-center max-w-lg w-full">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg"> Educação Ambiental
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          A importância das leis ambientais na conscientização da sociedade
      

O meio ambiente é um patrimônio essencial para a sobrevivência humana e sua preservação tornou-se cada vez mais urgente diante das ações que degradam a natureza. As leis ambientais surgem como instrumentos fundamentais para proteger os recursos naturais e, ao mesmo tempo, conscientizar a população sobre a responsabilidade de cada indivíduo em relação ao planeta.


Constituição Federal de 1988:

A Constituição estabelece que todos têm direito a um meio ambiente ecologicamente equilibrado e impõe ao poder público e à sociedade o dever de preservá-lo. Essa norma cria a base legal para todas as outras leis ambientais e reforça que a proteção do meio ambiente é um compromisso coletivo, essencial para garantir qualidade de vida no presente e no futuro.

        </p>

        <section className="max-w-4xl mx-auto py-16 px-6 leading-relaxed text-lg text-gray-200">
          <a
            href="/"
            className="relative z-10 bg-lime-700 hover:bg-lime-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            ← Voltar para Home
          </a>
        </section>
      </div>
    </div>
  );
}


