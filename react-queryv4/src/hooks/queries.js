import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useUsersData = () => {
    const fetchUsersAxios = () =>  axios.get("https://jsonplaceholder.typicode.com/users");
    return useQuery(["usersaxios"] ,fetchUsersAxios );
}

const useUsersDetails = (id) => {
        const fetchUserDetails = ({queryKey})=> {
            return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)
        }
        return useQuery(["user" ,id] , fetchUserDetails)
}


export {useUsersData , useUsersDetails }