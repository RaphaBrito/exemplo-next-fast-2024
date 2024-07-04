import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl">Página inicial</h1>
      <Link href="/contact" className="text-pink-400">
        Ir para a página de contato
      </Link>
    </div>
  );
}
