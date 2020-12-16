import base from './base'
import axios from "../utils/request"
const api={
    
    getXyb(params){
        return axios.get(base.baseUrl+base.getXingyunbi,
        {
            params:params
        },
        {headers:
            {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Token": 'oTz3u4r5fSNYDfms0InIXy07D-H8',
            }
        })
    }
}

export default api