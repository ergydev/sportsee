import { useState, useEffect } from "react";
import { UserApi } from "../api/userApi";
import { UserMockedApi } from "../mock/userMockedApi";

const useUserData = (userId) => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await UserApi.getUser(userId) 
                // use mocked data 
                // const data = await UserMockedApi.getUser(userId) 
                if(data){
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
