import { useState, useEffect } from "react";

const useUserPerformance = (userId) => {
    const [userPerformance, setUserPerformance] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserSession = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
                if(response.ok){
                    const data = await response.json()
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

    return { userPerformance, loading, error }
}

export default useUserPerformance