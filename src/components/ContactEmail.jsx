"use client";
import { useUser } from "@/context/UserContext";

export default function ContactEmail() {
  const { user, setUser } = useUser();

  const updateState = () => {
    setUser({ id: 1, name: "Nome alterado no contact email" });
  };

  return (
    <>
      <h1 className="text-lg">Contact Email</h1>
      <h1>rcb@cesar.org.br</h1>
      <h2>O Usuário atual é: {user.name}</h2>
      <button onClick={updateState} className="text-blue-300">
        Atualizar usuário no componente de email
      </button>
    </>
  );
}
