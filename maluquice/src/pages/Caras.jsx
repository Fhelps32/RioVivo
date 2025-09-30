import { Link } from "react-router-dom";

export default function Caras() {
  return (
    <div className="min-h-screen bg-[url('/images/caras_legais.jpeg')] bg-cover bg-center flex items-center justify-center px-6">
      <div className="text-center">
        <Link
          to="/"
          className="relative z-10 bg-[#FA8072] hover:bg-[#e46b60] text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          ← Voltar para Home
        </Link>
      </div>
    </div>
  );
}
