export const UserApi = { 
    getUser: async function(userId) {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        if(response.ok){
            return await response.json()
        } else {
            return null
        } 
    }
}

export const UserActivityApi = { 
    getUser: async function(userId) {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
        if(response.ok){
            return await response.json()
        } else {
            return null
        } 
    }
}

export const UserAvgApi = { 
    getUser: async function(userId) {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        if(response.ok){
            return await response.json()
        } else {
            return null
        } 
    }
}

export const UserPerformanceApi = { 
    getUser: async function(userId) {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
        if(response.ok){
            return await response.json()
        } else {
            return null
        } 
    }
}


