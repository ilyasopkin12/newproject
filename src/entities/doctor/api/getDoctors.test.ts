
jest.mock("@/shared/api/client", () => ({
    apiClient: {
        get: jest.fn(),
    },
}))

import { getDoctors } from "@entities/doctor/api/getDoctors"
import type { Doctor } from "@entities/doctor/model/types";
import { apiClient } from "@/shared/api/client";



const mockedGet = jest.mocked(apiClient.get)


describe("getDoctors", () => {
    beforeEach(()=> {
        mockedGet.mockReset()
    });

    it("Должен возвращаться список докторов из GET /doctors", async() => {
        const items: Doctor[] = [
            {
                id:"1",
                name: "Name",
                surname: "Surname",
                specialization: {
                    id: "id1",
                    name: "Терапевт"
                },
                city: "Ижевск",
                experienceYears: 666
            },
        ]

        mockedGet.mockResolvedValueOnce({data: {items}})

        await expect(getDoctors()).resolves.toEqual(items)
        expect(mockedGet).toHaveBeenCalledTimes(1)
        expect(mockedGet).toHaveBeenLastCalledWith("/doctors")
    })
    it("пробрасывает ошибку наружу ",async()=> {
        mockedGet.mockRejectedValueOnce(new Error("error"))
        await expect(getDoctors()).rejects.toThrow("error")
    })
})