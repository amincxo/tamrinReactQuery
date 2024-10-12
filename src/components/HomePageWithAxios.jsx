import { isError, useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Link } from "react-router-dom";

function HomePageWithAxios() {

    const fetchUsersAxios = () => axios.get("https://json4placeholder.typicode.com/users");
    const onSuccess = (data) => console.log("sucsess" , data?.data)

    const onError = (error) => console.log("sucsess" , error)

    const {data , isLoading , isError , error ,isFetching , refetch } = useQuery(["usersaxios"] ,fetchUsersAxios ,{
        // cacheTime:50000,
        // staleTime:120*1000,
        // refetchOnMount:false,
        // refetchOnWindowFocus:false
        // refetchInterval: 2 * 1000
        // enabled:false
        onSuccess,
        onError
    } );

    console.log({data , isLoading , isError , error , isFetching});
    // if (isLoading) {
    //      return <h2>loadiiiiiiiing</h2>
    // }

    // if (isError) {
    //     return <h2> something went worng - {error.message} </h2>
    // }

  return (
    <>
        <Link to="/q" > to axios </Link>
        {data?.data.map(i => 
        <h3 key={i.id} >
           {i.name}
        </h3>)}
    </>
  )
}

export default HomePageWithAxios