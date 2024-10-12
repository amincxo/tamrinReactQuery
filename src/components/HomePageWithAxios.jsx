import { isError, useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Link } from "react-router-dom";

function HomePageWithAxios() {

    const fetchUsersAxios = () => axios.get("https://jsonplaceholder.typicode.com/users");


    const {data , isLoading , isError , error ,isFetching } = useQuery(["usersaxios"] ,fetchUsersAxios ,{
        // cacheTime:50000,
        // staleTime:0
    } );

    console.log({data , isLoading , isError , error , isFetching});
    if (isLoading) {
         return <h2>loadiiiiiiiing</h2>
    }

    if (isError) {
        return <h2> something went worng - {error.message} </h2>
    }

  return (
    <>
        <Link to="/q" > to axios </Link>
        {data.data.map(i => 
        <h3 key={i.id} >
           {i.name}
        </h3>)}
    </>
  )
}

export default HomePageWithAxios