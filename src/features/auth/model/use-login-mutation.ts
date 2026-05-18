import { useMutation } from "@tanstack/react-query"

import type { User } from "@/entities/user"

import { loginRequest, type LoginPayload } from "../api"

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
