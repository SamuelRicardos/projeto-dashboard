// schemas/loginSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "O email é obrigatório").email("Email inválido"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
