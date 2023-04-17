import { getApiData } from "./axios";

class Services {
    
    static async userLogin(username: string, password: string) {
        const result = await getApiData('https://reqres.in/api/login', 'POST', {
            "email": username,
            "password": password
        })
        return result;
    }
    static async userSignup(username: string, password: string) {
        const result = await getApiData('https://reqres.in/api/register','POST',{
      "email": username,
      "password": password 
       })
       return result;
    }
    static async getAllUsers(page:number){
        let result = await 
        getApiData(`https://dummyapi.io/data/v1/user?page=${page}&limit=20`,'GET');
        return result;
    }
    
}

export default Services;