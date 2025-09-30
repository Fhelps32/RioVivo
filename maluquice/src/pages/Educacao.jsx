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
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Educação Ambiental
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          A importância das leis ambientais na conscientização da sociedade
1. Introdução

O meio ambiente é um patrimônio essencial para a sobrevivência humana e sua preservação tornou-se cada vez mais urgente diante das ações que degradam a natureza. As leis ambientais surgem como instrumentos fundamentais para proteger os recursos naturais e, ao mesmo tempo, conscientizar a população sobre a responsabilidade de cada indivíduo em relação ao planeta.

2. Constituição Federal de 1988

A Constituição estabelece que todos têm direito a um meio ambiente ecologicamente equilibrado e impõe ao poder público e à sociedade o dever de preservá-lo. Essa norma cria a base legal para todas as outras leis ambientais e reforça que a proteção do meio ambiente é um compromisso coletivo, essencial para garantir qualidade de vida no presente e no futuro.

3. Lei de Crimes Ambientais (Lei nº 9.605/1998)

Essa lei define punições para ações que prejudicam a natureza, como poluição, desmatamento ilegal, caça de animais silvestres e queimadas não autorizadas. Além de punir, ela serve como instrumento educativo, alertando a população sobre as consequências legais de atitudes que degradam o meio ambiente.

4. Política Nacional do Meio Ambiente (Lei nº 6.938/1981)

A lei institui instrumentos de fiscalização e incentiva a educação ambiental, permitindo a participação da sociedade na proteção dos recursos naturais. Ela estabelece diretrizes que ajudam a planejar o uso sustentável do solo, da água e da biodiversidade, equilibrando desenvolvimento econômico com preservação ambiental.

5. Código Florestal (Lei nº 12.651/2012)

O Código Florestal regula o uso de áreas de preservação permanente, como margens de rios, encostas e topos de morros, e define regras para reservas legais em propriedades rurais. Ao estabelecer limites claros, a lei busca impedir o desmatamento desenfreado e garantir a manutenção dos ecossistemas essenciais à vida humana.

6. Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010)

Essa lei estabelece a responsabilidade compartilhada pelo lixo, incentivando a reciclagem, a logística reversa e a redução do desperdício. Ela promove práticas de consumo consciente e reforça a necessidade de cada cidadão colaborar para a preservação ambiental no dia a dia.

7. Conclusão

As leis ambientais são instrumentos essenciais tanto para proteger o meio ambiente quanto para conscientizar a população. Elas mostram que a preservação da natureza é uma responsabilidade coletiva e que pequenas ações individuais, somadas, podem gerar grandes impactos positivos. Ao respeitar essas normas, garante-se não apenas a qualidade de vida no presente, mas também a sobrevivência das futuras gerações.
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


