"use client"

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      toast.success("Cadastro realizado com sucesso!", {
        description: `Seja bem-vindo, ${name}!`,
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
      });
      
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      setError("Erro ao criar conta. Tente novamente.");
      toast.error("Erro ao cadastrar", {
        description: "Verifique os dados e tente novamente.",
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Já tem uma conta?
          <span className="mx-1"></span>
          <button 
            onClick={() => router.push("/")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}