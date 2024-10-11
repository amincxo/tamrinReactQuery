import { isError, useQuery } from "@tanstack/react-query"
import axios from "axios";

function HomePageWithAxios() {

    const fetchUsersAxios = () => axios.get("https://jsonplaceholder.typicode.com/users");


    const {data , isLoading , isError , error} = useQuery(["usersaxios"] ,fetchUsersAxios  );

    console.log({data , isLoading , isError , error });
    if (isLoading) {
         return <h2>loadiiiiiiiing</h2>
    }

    if (isError) {
        return <h2> something went worng - {error.message} </h2>
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