import axios from "axios";

const instance = axios.create({
    //baseURL:'http://localhost:3000/api'
    baseURL:'http://localhost:5001'	
})

instance.interceptors.request.use(req => {
    return req
})

instance.interceptors.response.use(res => {
    return res
})

export default instance
