import React from 'react'
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


function UserDetails() {

    
    const {id} = useParams();
    const fetchUserDetails = ({queryKey})=> {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)
    }

    const {data} = useQuery(["user" ,id] , fetchUserDetails)

    console.log(data)
  return (
    <div>UserDetails - {id}</div>
  )
}

export default UserDetails