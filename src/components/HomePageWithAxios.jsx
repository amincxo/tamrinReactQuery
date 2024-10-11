import { useQuery } from "@tanstack/react-query"
import axios from "axios";

function HomePageWithAxios() {

    const fetchUsersAxios = () => axios.get("https://jsonplaceholder.typicode.com/users");


    const {data , isLoading} = useQuery(["usersaxios"] ,fetchUsersAxios  );

    console.log({data , isLoading});
    if (isLoading) {
         return <h2>loadiiiiiiiing</h2>
    }
  return (
    <>
        {data.data.map(i => 
        <h3 key={i.id} >
           {i.name}
        </h3>)}
    </>
  )
}

export default HomePageWithAxios