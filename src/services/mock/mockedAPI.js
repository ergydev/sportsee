import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mockedData";

const ACTIVITY_BY_KIND = {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
};

const mockedAPI = {

    getUserDailyActivity: (userId, date) => {
        const userActivity = USER_ACTIVITY.find((user) => user.userId === userId)
        if(userActivity){
            const session = userActivity.sessions.find((session) => session.day === date)
            if(session) {
                return session
            }
        }
        return null
    },

    getAverageSessionDuration: (userId) => {
        const userData = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId)

        if(userData) {
            const sessions = userData.sessions
            const totalSessions = sessions.length

            if(totalSessions === 0) {
                return 0
            }

            const totalDuration = sessions.reduce((acc, session) => acc + session.sessionLength, 0)
            const averageDuration = totalDuration / totalSessions

            return averageDuration
        }

        return 0
    },

    getDailyGoalCompletion: (userId) => {
        const userData = USER_MAIN_DATA.find((user) => user.id === userId)

        if(userData) {
            const todayScore = userData.todayScore
            const completionRate = todayScore * 100

            return completionRate
        }

        return 0
    },

    getUserActivities: (userId) => {
        const userData = USER_PERFORMANCE.find((user) => user.id === userId)

        if(userData) {
            const activities = userData.data.map((activity) => ({
                kind: ACTIVITY_BY_KIND[activity.kind],
                value: activity.value
            }))

            return activities
        }

        return []
    },

    getUserKeyData: (userId) => {
        const userData = USER_MAIN_DATA.find((user) => user.id === userId)

        if(userData) {
            const { calorieCount, proteineCount, carbohydrateCount, lipidCount } = userData.keyData

            return {
                calorieCount,
                proteineCount,
                carbohydrateCount,
                lipidCount
            }
        }
        
        return null
    },

    getUserFirstName: (userId) => {
        const userData = USER_MAIN_DATA.find((user) => user.id === userId)

        if(userData) {
            const {firstname} = userData.userInfos
            return firstname
        }

        return null
    },
}

export default mockedAPI