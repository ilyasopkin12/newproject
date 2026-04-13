

export type User = {
    id: string,
    email: string,
    name: string,
    surname: string,
    phone?: string,
    createdAt?: Date,
    passwordHash: string,
    role: string
}