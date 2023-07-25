import { USER, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockedData'

export const UserMockedApi = {
    getUser: async function(userId) {
        const promise = Promise.resolve(USER);
        const result = await promise;
        return result 
    }
}

export const UserActivityMocked = {
    getUser: async function(userId) {
        const promise = Promise.resolve(USER_ACTIVITY);
        const result = await promise;
        return result 
    }
}

export const UserAvgMockedApi = {
    getUser: async function(userId) {
        const promise = Promise.resolve(USER_AVERAGE_SESSIONS);
        const result = await promise;
        return result 
    }
}

export const UserPerformanceMocked = {
    getUser: async function(userId) {
        const promise = Promise.resolve(USER_PERFORMANCE);
        const result = await promise;
        return result 
    }
}