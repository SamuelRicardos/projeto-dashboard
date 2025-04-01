"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      toast.success(`Bem-vindo(a), ${user.displayName || 'Visitante'}!`, {
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
      });

      router.push("/dashboard");
    } catch (error) {
      setError("Email ou senha incorretos.");
      toast.error("Email ou senha incorretos.", {
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className={`w-full py-3 rounded-lg transition cursor-pointer ${isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`} 
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Não tem uma conta?
          <span className="mx-1"></span>
          <button 
            onClick={() => router.push("/cadastro")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Cadastre-se
          </button>
        </p>
        <div className="text-center mt-4">
          <button onClick={() => router.push("/resetpassword")} className="text-blue-500 hover:underline text-sm cursor-pointer">
            Esqueci minha senha
          </button>
        </div>
      </div>
    </div>
  );
}