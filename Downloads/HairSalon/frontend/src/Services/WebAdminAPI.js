import axios from "axios";

class WebAdminAPI {

    postAPICall(url,data, token)
    {
        return axios.post(url,data,{
            headers : {
                Authorization : `Bearer `  +  token,
                'Content-Type': "application/json"
            }
        })
    }

    GetApiCall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ` + token
            }
        }
        )
    }

    DeleteAPICall(url, token){
        return axios.delete(url , {
            headers : {
                Authorization : `Bearer ` + token
            }
        })
    }

    UpdateApiCall(url, data, token){
        return axios.put(url, data, {
            headers: {
                Authorization: `Bearer ` + token,
                'Content-Type': "application/json"
            }
        }
        )
    }
}

const SERVER = "http://localhost:5000/api"

export const urls ={
    USER : `${SERVER}/user_api/`
}
export default new WebAdminAPI()