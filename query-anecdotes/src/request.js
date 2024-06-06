import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseUrl).then(res => res.data)

export const createAnecdotes = (data) => axios.post(baseUrl, data).then(res => res.data)
// 投票
export const updateAnecdoteVotes = (data) => axios.put(`${baseUrl}/${data.id}`, data).then(res => res.data)