import Cookies from 'js-cookie';
import type { User } from "~/types/auth";

export const useAuthUser = (): User | null => {
    const user = Cookies.get('user')
    return user ? JSON.parse(user) as User : null
}