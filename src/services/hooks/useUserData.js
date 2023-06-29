import { useState, useEffect } from "react";

const useUserData = (userId) => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}`)
                if(response.ok){
                    const data = await response.json()
                    setUserData(data)
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

        fetchUserData()
    }, [userId])



    return { userData, loading, error}
}

export default useUserData
