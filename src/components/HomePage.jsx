import { useQuery } from "@tanstack/react-query"


function HomePage() {

    const fetchUsers = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json()
    }

    const {data , isLoading} = useQuery(["users"] ,fetchUsers  );

    console.log({data , isLoading});
    if (isLoading) {
         return <h2>loadiiiiiiiing</h2>
    }
  return (
    <>
        {data.map(i => 
        <h3 key={i.id} >
           {i.name}
        </h3>)}
    </>
  )
}

export default HomePage