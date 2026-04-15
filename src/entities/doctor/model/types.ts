
export type Doctor = {
    id: string,
    name: string,
    surname: string,
    specialization: {
        name: string,
        id: string
    },
    city: string,
    experienceYears: number,
    description?: string | null,
    isActive?: boolean
}