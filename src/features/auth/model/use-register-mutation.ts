import { useMutation } from "@tanstack/react-query";
import { registerRequest, type RegisterPayload } from "../api/register"
import type { User } from "@/entities/user/model/types";

export function useRegisterMutation(options?: {
    onSuccess?: (user: User) => void
    onError?: (error: Error) => void
}) {
    return useMutation<User,Error,RegisterPayload>({
        mutationFn: registerRequest,
        ...(options?.onSuccess ? { onSuccess: options.onSuccess } : {}),
        ...(options?.onError ? { onError: options.onError } : {}),
    })
}