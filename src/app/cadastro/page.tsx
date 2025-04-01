"use client";

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
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);
    setPasswordError(null);
    setLoading(true);

    if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      toast.success("Cadastro realizado com sucesso!", {
        description: `Seja bem-vindo, ${name}!`,
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
        duration: 2000
      });
      
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      setError("Erro ao criar conta. Tente novamente.");
      toast.error("Erro ao cadastrar", {
        description: "Verifique os dados e tente novamente.",
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
        duration: 2000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
            <input
              id="name"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          {passwordError && <p className="text-red-500 text-sm text-center mb-4">{passwordError}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Cadastrar"}
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