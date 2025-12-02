import z from "zod";
import type { loginSchema, registerSchema } from "~/schema/auth.schema";

export type RegisterRequest = z.infer<typeof registerSchema>
export type LoginRequest = z.infer<typeof loginSchema>