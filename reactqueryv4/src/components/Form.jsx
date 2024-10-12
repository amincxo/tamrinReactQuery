import { useAddPost } from "../hooks/mutaions"


function Form() {

    const {mutate , data , isLoading} = useAddPost();
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