import { useState, useEffect } from "react";

const useTodayScore = (userId) => {
    const [userScore, setUserScore] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserScore = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}`)
                if(response.ok){
                    const data = await response.json()
                    const { todayScore } = data
                    setUserScore(todayScore)
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

        fetchUserScore()
    }, [userId])

    return { userScore, loading, error}
}



function RadialTarget({ scoreData }){
    
    return (
        <div className='target__radial-chart'>
            <span className='target__radial-chart--score'> {`${scoreData}%`} </span>
            <p className='target__radial-chart--text'>
                {`de votre objectif`}
            </p>
        </div>
    )
}

function CustomLegend(){
    return(
        <h3 className='radial__title'>Score</h3>
    )
}

export  {useTodayScore, CustomLegend, RadialTarget}