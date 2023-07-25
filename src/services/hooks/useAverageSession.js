import { useState, useEffect } from "react";
import { UserAvgApi } from "../api/userApi";
import { UserAvgMockedApi } from "../mock/userMockedApi";

const useAverageSession = (userId) => {
    const [userSession, setUserSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserSession = async () => {
            try {
                const data = await UserAvgApi.getUser(userId)
                // use mocked data 
                // const data = await UserAvgMockedApi.getUser(userId) 
                if(data){
                    setUserSession(data.data.sessions)
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

    return { userSession, loading, error }
}

const DayOfWeek = (day) => {
    const dayMap = {
        "1": "L",
        "2": "M",
        "3": "M",
        "4": "J",
        "5": "V",
        "6": "S",
        "7": "D",
    }
    return dayMap[day] || day
}

function renderLegend() {
    return (
        <p className='average_session--legend'>Durée moyenne des sessions</p>
    )
}


export  {useAverageSession, DayOfWeek, renderLegend}