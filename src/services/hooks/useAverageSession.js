import { useState, useEffect } from "react";

const useAverageSession = (userId) => {
    const [userSession, setUserSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserSession = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
                if(response.ok){
                    const data = await response.json()
                    setUserSession(data)
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

export default useAverageSession