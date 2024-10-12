import {  useQuery } from "@tanstack/react-query"

function App() {

    const queryKey = ["all-todos"];
    const queryFn = () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
   
     const {data} =  useQuery({queryKey , queryFn}
    )

    console.log(data)
  return (
        <>
        heloooooooooooooooooooow
        </>
  )
}

export default App
