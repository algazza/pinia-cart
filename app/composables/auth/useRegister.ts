import { useMutation } from '@tanstack/vue-query';
import Api from '~/service/api';
import type { RegisterRequest } from '~/types/auth';

export const useRegister = () => {
    return useMutation({
        mutationFn: async (data: RegisterRequest) => {
            const res = await Api.post('/signup', data)
            return res.data
        }
    })
}