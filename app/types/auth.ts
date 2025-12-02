import z from "zod";
import type { loginSchema, registerSchema, userSchema } from "~/schema/auth.schema";

export type RegisterRequest = z.infer<typeof registerSchema>
export type LoginRequest = z.infer<typeof loginSchema>
export type User = z.infer<typeof userSchema>