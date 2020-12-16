
import axios from "axios"
import qs from "query-string"
// import { config } from "vue/types/umd";


const errorHandle = (status,other) =>{
    switch(status){
        case 400:
            //请求头和服务器的限制
            console.log("服务器不理解请求语法");
            break;
        case 401:
            //token验证失败
            console.log("未授权");
            break;
        case 403:
            //用户身份过期了，服务器请求限制了
            console.log("服务器拒绝访问");
            break;
        case 404:
            //没找到服务器
            console.log("网络请求地址错误");
            break;
        default:
            console.log(other);
            break;
    }
}

//创建axios对象

const instance = axios.create({
    timeout:5000 //请求超时

})
//全局配置

instance.defaults.baseURL = "http://iwenwiki.com";
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//创建请求拦截与相应拦截操作
instance.interceptors.request.use(config=>{
    //配置
    if(config.method == "post"){
        config.data == qs.stringify(config.data)
    }
    return config   
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    //成功
    /**
     * !请求成功与失败的判断
     * ?1.请求成功与请求失败
     * ?2.请求成功：结果的请求成功与请求失败
     */
    response=>response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error=>{
        const { response } = error;
        /**
         * response包含的信息
         * status
         * data
         */
        if(response){
            //给出具体错误信息
            errorHandle(response.status,response.data)
            return Promise.reject(response);
        }else{
            console.log("请求被中断了");
        }
    }
)

// instance.interceptors.request.use(function(config){
//     return config; 
// },function(error){
//     return Promise.reject(error)//error不是一个Promise对象
// }
// )

// instance.interceptors.response.use(function(response){
//     return response.status ===200 ? Promise.resolve(response) : Promise.reject(response);
// },function(error){
//     return Promise.reject(error);
// })

export default instance;