import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)
export const insertUser = payload => api.post(`/user`, payload)
export const insertChannel = payload => api.post(`/channel`, payload)
export const getUserById = id => api.get(`/user/${id}`)
export const getUserByUserId = payload => api.get(`/user/login`, payload)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    insertUser,
    insertChannel,
    getUserById,
    getUserByUserId,
}

export default apis
