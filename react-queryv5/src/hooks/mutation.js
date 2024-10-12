import { useMutation } from "@tanstack/react-query";

const usePostMutation = () => {

    
    const mutationFn = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
       
    return useMutation({mutationFn})
}



export {usePostMutation}