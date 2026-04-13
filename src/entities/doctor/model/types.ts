
export type Doctor = {
    id: string,
    name: string,
    surname: string,
    specialization: string,
    city: string,
    expirienceYears: number,
    description?: string | null,
    isActive?: boolean
}