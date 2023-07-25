import useUserData from './useUserData'
import { useUserActivity } from './useUserActivity'
import { useAverageSession } from './useAverageSession'
import { useUserPerformance } from './useUserPerformance'

const useDashboardData = (userId) => {
    const { userData } = useUserData(userId)
    const { userActivity } = useUserActivity(userId)
    const { userPerformance } = useUserPerformance(userId)
    const { userSession } = useAverageSession(userId)

    // get the firstname & today score completion
    const firstName = userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName;
    const userScore = userData && userData.data && (userData.data.todayScore || userData.data.score ) 
    const userScorePercentage = userScore ? Math.round(userScore * 100) : 0
    const sessions = userActivity && userActivity.data && userActivity.data.sessions

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData?.data?.keyData ?? {
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0
    }


    return {
        userData,
        userActivity,
        userPerformance,
        userSession,
        firstName,
        userScorePercentage,
        sessions,
        calorieCount,
        proteinCount,
        carbohydrateCount,
        lipidCount
    }
}

export default useDashboardData
