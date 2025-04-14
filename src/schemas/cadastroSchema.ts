import { z } from "zod";

export const cadastroSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type CadastroSchemaType = z.infer<typeof cadastroSchema>;
