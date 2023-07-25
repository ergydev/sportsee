import { useState, useEffect } from "react";
import { UserPerformanceApi } from "../api/userApi";
import { UserPerformanceMocked } from "../mock/userMockedApi";

const useUserPerformance = (userId) => {
    const [userPerformance, setUserPerformance] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserSession = async () => {
            try {
                const data = await UserPerformanceApi.getUser(userId)
                // use mocked data 
                // const data = await UserPerformanceMocked.getUser(userId) 
                if(data){
                    setUserPerformance(data)
                    setLoading(false)
                } else {
                    setError(true)
                } 
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur')
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchUserSession()
    }, [userId])

    // const data = userPerformance.data && userPerformance.data.data;
    const data = userPerformance && userPerformance.data && userPerformance.data.data;
    const kind = userPerformance && userPerformance.data && userPerformance.data.kind;


    return { userPerformance, loading, error, data, kind }
}



// map and convert activity name in french 
function mapActivity(kind) {
    const activityMap = {
        1: "cardio",
        2: "énergie",
        3: "endurance",
        4: "force",
        5: "vitesse",
        6: "intensité",
    }
    return activityMap[kind] || kind
}

export  { useUserPerformance, mapActivity }