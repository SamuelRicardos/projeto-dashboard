"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      toast.success(`Bem-vindo(a), ${user.displayName || 'Visitante'}!`, {
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
        duration: 2000,
      });

      router.push("/dashboard");
    } catch {
      toast.error("Email ou senha incorretos.", {
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Carregando..." : "Entrar"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Não tem uma conta?
          <button 
            onClick={() => router.push("/cadastro")}
            className="text-blue-500 hover:underline ml-1"
          >
            Cadastre-se
          </button>
        </p>
        <div className="text-center mt-4">
          <button onClick={() => router.push("/resetpassword")} className="text-blue-500 hover:underline text-sm">
            Esqueci minha senha
          </button>
        </div>
      </div>
    </div>
  );
}