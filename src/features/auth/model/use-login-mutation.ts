import { useMutation } from "@tanstack/react-query";
import { loginRequest, type LoginPayload } from "../api/login.js"
import type { User } from "@/entities/user/model/types.js";

export function useLoginMutation(options?: {
    onSuccess?: (user: User) => void
    onError?: (error: Error) => void
}) {
    return useMutation<User,Error,LoginPayload>({
        mutationFn: loginRequest,
        ...(options?.onSuccess ? { onSuccess: options.onSuccess } : {}),
        ...(options?.onError ? { onError: options.onError } : {}),
    })
}