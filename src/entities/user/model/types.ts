

export type User = {
    id: string,
    email: string,
    fullName: string,
    phone?: string,
    createdAt: Date,
    passwordHash: string,
    role: string
}