import {  useQuery  , useMutation} from "@tanstack/react-query"
import { usePostMutation } from "./hooks/mutation"

function App() {

    // const queryKey = ["all-todos"];
    // const queryFn = () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
   
    //  const {isLoading ,data, isPending} =  useQuery({queryKey , queryFn})
    // // is loading => isPanding && isFetching 
    // console.log({isLoading, data , isPending})


    const {mutate , data , isPending , }  = usePostMutation()
    
    const clickHandler = () => {
        const data = {name : "amin"}
        mutate(data , {onSuccess: () => console.log("ersal") , onError: (error)=>console.log(error)  })
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
