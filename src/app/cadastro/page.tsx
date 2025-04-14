"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema, CadastroSchemaType } from "@/schemas/cadastroSchema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function Cadastro() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroSchemaType>({
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = async (data: CadastroSchemaType) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(userCredential.user, { displayName: data.name });

      toast.success("Cadastro realizado com sucesso!", {
        description: `Seja bem-vindo, ${data.name}!`,
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
        duration: 2000,
      });

      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      toast.error("Erro ao cadastrar", {
        description: "Verifique os dados e tente novamente.",
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
            <input
              id="name"
              {...register("name")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

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
          <button
            onClick={() => router.push("/")}
            className="ml-1 text-blue-500 hover:underline cursor-pointer"
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}
