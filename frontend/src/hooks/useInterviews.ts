import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export const useInterviews = () => {

    const interviews = useQuery(api.interviews.getMyInterviews)

    return {
        interviews
    }
}