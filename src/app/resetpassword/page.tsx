"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordSchemaType } from "@/schemas/resetPasswordSchema";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleResetPassword = async (data: ResetPasswordSchemaType) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("Email enviado! Verifique sua caixa de entrada.", {
        position: "top-right",
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
        duration: 2000,
      });

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch {
      toast.error("Erro ao enviar email. Verifique o email informado.", {
        position: "top-right",
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Redefinir senha</h2>

        <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Redefinir senha"}
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