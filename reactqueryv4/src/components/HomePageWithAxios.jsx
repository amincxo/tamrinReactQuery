
import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/queries";

function HomePageWithAxios() {



    const {data , isLoading , isError , error ,isFetching , refetch } = useUsersData();

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
             <Link  key={i.id} to={`/users/${i.id}`} ><h3> {i.name} </h3> </Link>
             )}
    </>
  )
}

export default HomePageWithAxios