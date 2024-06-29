import ContactNumber from "@/components/ContactNumber";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="p-10">
      <h1>Página de contato</h1>
      <ContactNumber />
      <Link href="/" className="text-pink-400">
        Voltar para Home
      </Link>
    </div>
  );
}
