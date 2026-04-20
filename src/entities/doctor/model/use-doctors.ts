import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../api/getDoctors";

export function useDoctors() {
    return useQuery({
        queryKey:["doctors"],
        queryFn: getDoctors
    })
}