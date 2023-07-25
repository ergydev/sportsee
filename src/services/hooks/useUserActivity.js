import { useState, useEffect } from "react";

const useUserActivity = (userId) => {
    const [userActivity, setUserActivity] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserActivity = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
                if(response.ok){
                    const data = await response.json()
                    setUserActivity(data)
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

        fetchUserActivity()
    }, [userId])

    return { userActivity, loading, error }
}

const formatValue = (value, name) => {
    if (name === 'kilogram') {
        return `${value}kg`
    }
    if (name === 'calories') {
        return `${value}Kcal`
    }
    return value
} 


export  {useUserActivity , formatValue} 