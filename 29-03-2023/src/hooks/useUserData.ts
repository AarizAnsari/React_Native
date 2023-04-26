import { useState,useEffect } from "react"
import Services from "../services/apiServices";

const useUserData = (page:number) => {
    const [users, setUsers] = useState([]);
    const getData = async (page: number) => {
        if (page <= 4) {
            let res = await Services.getAllUsers(page);
            
            setUsers(users.concat(res?.data.data))
        }
    }
    useEffect(() => {
        getData(page);
    }, [page]);
    return users;
}

export default useUserData