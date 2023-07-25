import { useEffect } from 'react'

import useUserData from './useUserData'
import { useUserActivity } from './useUserActivity'
import { useAverageSession } from './useAverageSession'
import { useUserPerformance } from './useUserPerformance'
import mockedAPI from '../mock/mockedAPI'
import { USER_MAIN_DATA } from '../mock/mockedData'

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

    // verify if data are null and use mockedData 
    // const isDataEmpty = 
    //     !userData ||
    //     !userData.data ||
    //     !userActivity ||
    //     !userActivity.data ||
    //     !userPerformance ||
    //     !userPerformance.data ||
    //     !userSession||
    //     !userSession.data;
    // const dataToUse = isDataEmpty ? USER_MAIN_DATA.find((user) => user.id === userId) : null


    // const data = dataToUse || userData.data
    // const kind = dataToUse ? null : userPerformance.data.kind


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
