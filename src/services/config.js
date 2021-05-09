import axios from "axios"

export const http = axios.create({
    baseURL: 'https://apirest-coffeemv.herokuapp.com/api/'
})