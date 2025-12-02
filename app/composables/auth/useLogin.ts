import { useMutation } from "@tanstack/vue-query"
import Api from "~/service/api"
import type { LoginRequest } from "~/types/auth"

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data: LoginRequest) => {
            const res = await Api.post('/signin', data)
            return res.data
        }
    })
}