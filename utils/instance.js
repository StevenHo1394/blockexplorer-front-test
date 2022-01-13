import axios from "axios";

const instance = axios.create({
    //baseURL:'http://localhost:3000/api'
    //baseURL:'http://165.232.173.187:5001'	
    baseURL:'http://3.68.159.170:5001'
})

instance.interceptors.request.use(req => {
    return req
})

instance.interceptors.response.use(res => {
    return res
})

export default instance
