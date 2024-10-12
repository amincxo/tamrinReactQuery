import {  useQuery } from "@tanstack/react-query"

function App() {

    const queryKey = ["all-todos"];
    const queryFn = () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
   
     const {isLoading ,data, isPending} =  useQuery({queryKey , queryFn})
    // is loading => isPanding && isFetching 
    console.log({isLoading, data , isPending})

  return (
        <>
            heloooooooooooooooooooow
        </>
  )
}

export default App
