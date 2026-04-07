
export type Doctor = {
    id: string,
    fullName: string,
    specialization: string,
    city: string,
    expirienceYears: number,
    description?: string | null,
    isActive?: boolean
}