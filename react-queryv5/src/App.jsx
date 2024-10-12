import {  useQuery  , useQueryClient} from "@tanstack/react-query"
import { usePostMutation } from "./hooks/mutation"

function App() {

    const queryClient = useQueryClient();

    const queryKey = ["all-post"];
    const queryFn = () => fetch("https://jsonplaceholder.typicode.com/post").then((res) => res.json())
   
     const {isLoading ,data, isPending} =  useQuery({queryKey , queryFn})
    // is loading => isPanding && isFetching 
    console.log({isLoading, data , isPending})


    const {mutate }  = usePostMutation()
    
    const clickHandler = () => {
        const data = {name : "amin"}
        mutate(data , {onSuccess: () => {
            console.log(data)
            queryClient.invalidateQueries({
                queryKey:["all-post"]
            })
        } , onError: (error)=>console.log(error)  })
    }

    console.log({data, isPending })
  return (
        <>
            heloooooooooooooooooooow



            <button onClick={clickHandler} >asdgfasdfasd</button>
        </>
  )
}

export default App
