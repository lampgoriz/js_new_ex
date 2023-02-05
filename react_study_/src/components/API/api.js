import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '08675a66-dea8-4279-8e65-bab7fb663d39'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UserAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    }
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
}

export const AuthAPI = {
    authMe(){
        return instance.get(`auth/me`,)
    },
}


