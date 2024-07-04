import { UserProvider } from "@/context/UserContext";
import ContactNumber from "@/components/ContactNumber";
import Link from "next/link";
import ContactEmail from "@/components/ContactEmail";

export default function Contact() {
  return (
    <UserProvider>
      <div className="p-10">
        <h1 className="text-3xl">Página de contato</h1>
        <Link href="/" className="text-pink-400">
          Voltar para Home
        </Link>
        <div className="p-10">
          <div className="p-10">
            <ContactNumber />
          </div>
          <div className="p-10">
            <ContactEmail />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
