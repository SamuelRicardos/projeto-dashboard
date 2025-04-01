"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email enviado! Verifique sua caixa de entrada.", {
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
        duration: 2000
      });

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error: any) {
      toast.error("Erro ao enviar email. Verifique o email informado.", {
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
        <h2 className="text-2xl font-bold text-center mb-6">Redefinir senha</h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Redefinir senha"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Lembrou sua senha?
          <a href="/" className="text-blue-500 hover:underline ml-1">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}