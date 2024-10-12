import { useMutation } from "@tanstack/react-query"
import axios from "axios"


function Form() {
    const addPost = (data) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts' ,data);
    }
    const {mutate , data , isLoading} = useMutation(addPost)
    console.log(data , isLoading)
    const sendHandler = () => {
        const data = {
            title: "foo",
            body:"bar",
            userId: 1,
        }

        mutate(data);
    }

  return (
    <div>
        <h1>form</h1>
        <button onClick={sendHandler} >send</button>
        {isLoading&& <h1>datam misendam</h1>}
    </div>

  )
}

export default Form