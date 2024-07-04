"use client";

import { useUser } from "@/context/UserContext";

export default function ContactNumber() {
  const { user, setUser } = useUser();

  const updateState = () => {
    setUser({ id: 2, name: "Nome alterado no contact number" });
  };

  return (
    <>
      <h1 className="text-lg">Contact Number</h1>
      <h1>(81) 98794-8784</h1>
      <h2>O Usuário atual é: {user.name}</h2>
      <button onClick={updateState} className="text-blue-300">
        Atualizar usuário no componente de número
      </button>
    </>
  );
}
